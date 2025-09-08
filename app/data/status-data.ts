import { Eye, ListCheck, Clock, CheckCircle } from "lucide-react";

export const STATUS_ORDER = [
  "under_review",
  "planned",
  "in_progress",
  "completed",
];

export const STATUS_GROUP = {
  under_review: {
    title: "Under Review ",
    description: " New Suggestion being evaluated ",
    icon: Eye,
    color: "border-gray-400 dark:border-gray-500",
    bgColor:
      "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50",
    textColor: "text-gray-700 dark:text-gray-300",
    countColor: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
  },
  planned: {
    title: "Planned",
    description: " Features we,re planning to work on ",
    icon: ListCheck,
    color: "border-blue-500 dark:border-blue-500",
    bgColor:
      "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-blue-800/30",
    textColor: "text-blue-700 dark:text-blue-300",
    countColor: "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300",
  },
  in_progress: {
    title: "In Progress",
    description: " Currently being developed ",
    icon: Clock,
    color: "border-yellow-500 dark:border-yellow-500",
    bgColor:
      "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/50 dark:to-yellow-800/50",
    textColor: "text-yellow-700 dark:text-yellow-300",
    countColor:
      "bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300",
  },
  completed: {
    title: "Completed",
    description: " Released features ",
    icon: CheckCircle,
    color: "border-green-500 dark:border-green-500",
    bgColor:
      "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/50",
    textColor: "text-green-700 dark:text-green-300",
    countColor:
      "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300",
  },
};
