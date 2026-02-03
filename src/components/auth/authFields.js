import { Mail, Lock, User, Calendar } from "lucide-react";

export const authFields = {
  login: [
    {
      name: "email",
      type: "email",
      icon: Mail,
    },
    {
      name: "password",
      type: "password",
      icon: Lock,
    },
  ],

  register: [
    {
      name: "name",
      type: "text",
      icon: User,
    },
    {
      name: "age",
      type: "number",
      icon: Calendar,
    },
    {
      name: "email",
      type: "email",
      icon: Mail,
    },
    {
      name: "password",
      type: "password",
      icon: Lock,
    },
    {
      name: "confirm",
      type: "password",
      icon: Lock,
    },
  ],
};
