import { notFoundError, unauthorizedError } from "@/errors";
import {
  Status,
  SubscriptionCreateInput,
  subscriptionRepository,
  userRepository,
} from "@/repositories";
import { objectService } from "./object-service";

async function createSubscription(data: SubscriptionCreateInput) {
  return await subscriptionRepository.create(data);
}

async function findByIdWithImages(id: number, user_id: number) {
  const item = await subscriptionRepository.findByIdWithImages(id);
  if (!item) throw notFoundError();

  const user = await userRepository.findById(user_id);
  if (!user) throw notFoundError();

  if (item.user_id !== user_id && user.type !== "ADMIN")
    throw unauthorizedError();

  return item;
}

async function findPendingWithImages() {
  return await subscriptionRepository.findPendingWithImages();
}

async function approveSubscription(id: number) {
  const subscription = await subscriptionRepository.findByIdWithImages(id);
  if (!subscription) {
    throw notFoundError();
  }

  const { name, description, category, SubscriptionImage } = subscription;

  await objectService.createObject({
    name,
    description,
    category,
    ObjectImage: SubscriptionImage.map((image) => image.image_url),
  });

  return changeStatus(id, "APPROVED");
}

async function rejectSubscription(id: number) {
  return changeStatus(id, "REJECTED");
}

async function changeStatus(id: number, status: Status) {
  return await subscriptionRepository.changeStatus(id, status);
}

async function findUserSubscriptionsWithImages(user_id: number) {
  return await subscriptionRepository.findUserSubscriptionsWithImages(user_id);
}

export const subscriptionService = {
  createSubscription,
  findByIdWithImages,
  findPendingWithImages,
  approveSubscription,
  rejectSubscription,
  findUserSubscriptionsWithImages,
};
