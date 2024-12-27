export function hideArgs(properties: string[]) {
  return properties.reduce<Record<string, { table: { disable: boolean } }>>(
    (acc, property) => {
      acc[property] = { table: { disable: true } }
      return acc
    },
    {}
  )
}
