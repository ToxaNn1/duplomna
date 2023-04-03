import { ref, Ref, UnwrapRef } from "vue";

type ToggleReturnType = [Ref<UnwrapRef<boolean>>, (flag?: boolean) => void];

export const useToggle = (initialValue = false): ToggleReturnType => {
  const click = ref<boolean>(initialValue);

  const toggleValue = () => {
    click.value = !click.value;
  };

  return [click, toggleValue];
};
