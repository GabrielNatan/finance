export const useLocalStorage = (name: string) => {
  if (name !== undefined) {
    return localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null
  }
  return false
}
