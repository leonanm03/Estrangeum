import {
  Status,
  SubscriptionCreateInput,
  subscriptionRepository,
} from "@/repositories";

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
};
