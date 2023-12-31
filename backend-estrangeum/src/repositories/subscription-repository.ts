import { prisma } from "@/config";
import {
  Subscription,
  SubscriptionImage,
  Status,
  Category,
} from "@prisma/client";

function create(data: SubscriptionCreateInput): Promise<Subscription> {
  return prisma.subscription.create({
    data: {
      ...data,
      SubscriptionImage: {
        create: data.SubscriptionImage.map((image) => ({ image_url: image })),
      },
    },
  });
}

function findByIdWithImages(id: number): Promise<
  Subscription & {
    SubscriptionImage: SubscriptionImage[];
  }
> {
  return prisma.subscription.findUnique({
    where: { id },
    include: {
      SubscriptionImage: true,
    },
  });
}

function findUserSubscriptionsWithImages(user_id: number): Promise<
  (Subscription & {
    SubscriptionImage: SubscriptionImage[];
  })[]
> {
  return prisma.subscription.findMany({
    where: { user_id },
    include: {
      SubscriptionImage: true,
    },
  });
}

function changeStatus(id: number, status: Status): Promise<Subscription> {
  return prisma.subscription.update({
    where: { id },
    data: { status },
  });
}

function findPendingWithImages(): Promise<
  (Subscription & {
    SubscriptionImage: SubscriptionImage[];
  })[]
> {
  return prisma.subscription.findMany({
    where: { status: "PENDING" },
    include: {
      SubscriptionImage: true,
    },
  });
}

export type SubscriptionCreateInput = {
  user_id: number;
  name: string;
  description: string;
  category: Category;
  SubscriptionImage: string[];
};

export { Status };

export const subscriptionRepository = {
  create,
  findByIdWithImages,
  changeStatus,
  findPendingWithImages,
  findUserSubscriptionsWithImages,
};
