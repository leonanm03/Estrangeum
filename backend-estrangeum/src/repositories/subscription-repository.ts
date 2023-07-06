import { prisma } from "@/config";
import { Subscription, SubscriptionImage, Status } from "@prisma/client";

export function create(data: SubscriptionCreateInput): Promise<Subscription> {
  return prisma.subscription.create({
    data: {
      ...data,
      SubscriptionImage: {
        create: data.ObjectImage.map((image) => ({ image_url: image })),
      },
    },
  });
}

export function findByIdWithImages(id: number): Promise<
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

export function changeStatus(
  id: number,
  status: Status
): Promise<Subscription> {
  return prisma.subscription.update({
    where: { id },
    data: { status },
  });
}

export function findManyWithImages(): Promise<
  (Subscription & {
    SubscriptionImage: SubscriptionImage[];
  })[]
> {
  return prisma.subscription.findMany({
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

export const subscriptionRepository = {
  create,
};
