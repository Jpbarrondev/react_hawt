import create from 'zustand';

export type ThemeMode = 'light' | 'dark';

interface AppState {
  theme: ThemeMode;
  toggleTheme: () => void;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

/**
 * Global application store managed by Zustand. It tracks theme state
 * and drawer visibility. Additional global state can be added here.
 */
export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  isDrawerOpen: false,
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
}));
