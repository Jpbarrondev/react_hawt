import { signal } from '@preact/signals-react';

/**
 * Reactive signal representing the current search query.
 * Components can import this signal and read/write its value
 * directly without props drilling. This demonstrates usage of
 * Preact signals within a React application.
 */
export const searchQuery = signal('');
