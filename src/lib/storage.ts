export const DEFAULT_SETTINGS = {
  theme: 'dark',
  language: 'uk',
  reducedMotion: false,
  refreshInterval: 60000,
  notifications: true,
  mapLayers: ['alerts', 'weather']
} as const;

export function readSettings(): typeof DEFAULT_SETTINGS {
  const raw = localStorage.getItem('situation-settings');

  if (!raw) {
    return { ...DEFAULT_SETTINGS };
  }

  try {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function writeSettings(settings: typeof DEFAULT_SETTINGS) {
  localStorage.setItem('situation-settings', JSON.stringify(settings));
}
