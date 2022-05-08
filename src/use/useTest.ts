export function useTestI18n () {
  return {
    global: {
      mocks: {
        $t: (key: string): string => key,
      },
      directives: {
        $t: (key: string) => key,
      }
    },
  };
}
