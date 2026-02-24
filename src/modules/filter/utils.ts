export const formatTitle = (value: string) => {
  if (!value) return value;
  const capitalized = value.charAt(0).toUpperCase() + value.slice(1);

  if (capitalized.length > 10) {
    return capitalized.slice(0, 10) + "...";
  }

  return capitalized;
};
