import { prisma } from "@/config";
import {
  Subscription,
  SubscriptionImage,
  Status,
  Prisma,
} from "@prisma/client";

function create(data: SubscriptionCreateInput): Promise<Subscription> {
  return prisma.subscription.create({
    data: {
      ...data,
      SubscriptionImage: {
        create: data.ObjectImage.map((image) => ({ image_url: image })),
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
  category: "ALIEN" | "MAGIC" | "HAUNTED" | "MYSTERY";
  ObjectImage: string[];
};

export { Status };

export const subscriptionRepository = {
  create,
  findByIdWithImages,
  changeStatus,
  findPendingWithImages,
};
