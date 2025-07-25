export function isXSS(input) {
  return /<[^>]*script|on\w+=|javascript:/i.test(input);
}

export function isSQLi(input) {
  return /('|--|;|\/\*|\*\/|\b(OR|AND|SELECT|INSERT|DELETE|UPDATE|DROP|UNION|WHERE|1=1)\b)/i.test(input);
}
