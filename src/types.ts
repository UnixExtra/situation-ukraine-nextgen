export type AlertLevel = 'safe' | 'yellow' | 'orange' | 'red' | 'info';

export interface SourceStatus {
  name: string;
  status: 'ok' | 'degraded' | 'offline';
  detail: string;
  lastSuccessAt: string | null;
  lastErrorAt: string | null;
}

export interface RegionAlert {
  id: string;
  name: string;
  level: AlertLevel;
  source: string;
  lastUpdated: string;
  note?: string;
  coordinates?: { lat: number; lng: number };
}

export interface DashboardSnapshot {
  regionAlerts: RegionAlert[];
  sources: SourceStatus[];
  updatedAt: string;
  error?: string;
}

export interface AppSettings {
  theme: 'dark' | 'light';
  language: 'uk' | 'en' | 'ru';
  reducedMotion: boolean;
  refreshInterval: number;
  notifications: boolean;
  mapLayers: string[];
}
