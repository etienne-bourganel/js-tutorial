let emailParts = (string) => {
  let processedContent = string.toLowerCase();
  return processedContent.split("@");
}