import clsx from "clsx"
import { twMerge as twMergeOriginal } from "tailwind-merge"

function twMerge(...args) {
  return twMergeOriginal(clsx(args))
}

export default twMerge
