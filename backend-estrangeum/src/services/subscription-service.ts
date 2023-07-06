import { notFoundError } from "@/errors";
import {
  Status,
  SubscriptionCreateInput,
  subscriptionRepository,
} from "@/repositories";
import { objectService } from "./object-service";

async function createSubscription(data: SubscriptionCreateInput) {
  return await subscriptionRepository.create(data);
}

async function findByIdWithImages(id: number) {
  return await subscriptionRepository.findByIdWithImages(id);
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

export const subscriptionService = {
  createSubscription,
  findByIdWithImages,
  findPendingWithImages,
  approveSubscription,
  rejectSubscription,
};
