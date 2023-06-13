export const getFormData = (
  success = true,
  timeout = 2000
): Promise<{ fullName: string } | { message: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({
          fullName: "Vlad",
        });
      } else {
        reject({ message: "Error" });
      }
    }, timeout);
  });
};
