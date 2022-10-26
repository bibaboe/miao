function formatPadLeft(content, count = 2, padStr = '0') {
  content = String(content)
  return content.padStart(count, padStr)
}
