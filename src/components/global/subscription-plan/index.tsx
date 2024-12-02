type Props = {
  type: "FREE" | "PRO";
  children: React.ReactNode;
};

export const SubscriptionPlan = ({ type, children }: Props) => {
  return children;
};
