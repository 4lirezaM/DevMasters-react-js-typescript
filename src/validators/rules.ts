export const requiredValidator = () => "This input is required.";

export const minValidator = (value: number) => ({
  value: value,
  message: `This input must contain at least ${value} characters.`,
});

export const maxValidator = (value: number) => ({
  value: value,
  message: `This input must contain no more than ${--value} characters.`,
});

export const passwordMatchValidator = (password: string) => {
  return (value: string) => value === password || "Passwords do not match";
};
