// =============================================
// src/app/folder/page.tsx
// Your Folder — upload and store files, photos, videos
// UPDATED: Default items are Wenqi's 3 photos
// FIXED: Items persist via localStorage
// =============================================
'use client';

import { useState, useRef, useEffect } from 'react';

type FileType = 'image' | 'video' | 'file';

interface FolderItem {
  id: string;
  name: string;
  type: FileType;
  url: string;
  size: string;
  addedAt: string;
}

// Wenqi's 3 photos (stored in public/folder/)
const DEFAULT_ITEMS: FolderItem[] = [
  { id: 'default-1', name: 'letter-1.jpeg', type: 'image', url: '/folder/letter-1.jpeg', size: '122 KB', addedAt: 'Today' },
  { id: 'default-2', name: 'drawings.jpeg', type: 'image', url: '/folder/drawings.jpeg', size: '105 KB', addedAt: 'Today' },
  { id: 'default-3', name: 'note.jpeg', type: 'image', url: '/folder/note.jpeg', size: '180 KB', addedAt: 'Today' },
];

const STORAGE_KEY = 'softspace_folder_items';

export default function FolderPage() {
  const [items, setItems] = useState<FolderItem[]>([]);
  const [filter, setFilter] = useState<'all' | FileType>('all');
  const [previewItem, setPreviewItem] = useState<FolderItem | null>(null);
  const [loaded, setLoaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setItems(parsed);
          } else {
            setItems(DEFAULT_ITEMS);
          }
        } catch {
          setItems(DEFAULT_ITEMS);
        }
      } else {
        setItems(DEFAULT_ITEMS);
      }
      setLoaded(true);
    }
  }, []);

  // Persist to localStorage whenever items change
  useEffect(() => {
    if (loaded && typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, loaded]);

  const filtered = filter === 'all' ? items : items.filter((i) => i.type === filter);

  const getIcon = (type: FileType) => {
    switch (type) {
      case 'image': return '🖼️';
      case 'video': return '🎬';
      case 'file': return '📄';
    }
  };

  const getColor = (type: FileType) => {
    switch (type) {
      case 'image': return '#7FB8D6';
      case 'video': return '#D67FA8';
      case 'file': return '#9B6BC2';
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        let type: FileType = 'file';
        if (file.type.startsWith('image/')) type = 'image';
        else if (file.type.startsWith('video/')) type = 'video';

        const sizeKB = file.size / 1024;
        const size = sizeKB > 1024 ? `${(sizeKB / 1024).toFixed(1)} MB` : `${Math.round(sizeKB)} KB`;

        const newItem: FolderItem = {
          id: Date.now().toString() + Math.random().toString(36).slice(2),
          name: file.name,
          type,
          url: type === 'image' ? (reader.result as string) : URL.createObjectURL(file),
          size,
          addedAt: 'Just now',
        };

        setItems((prev) => [newItem, ...prev]);
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
    setPreviewItem(null);
  };

  const counts = {
    all: items.length,
    image: items.filter((i) => i.type === 'image').length,
    video: items.filter((i) => i.type === 'video').length,
    file: items.filter((i) => i.type === 'file').length,
  };

  // Don't render until localStorage is loaded to prevent flash
  if (!loaded) {
    return (
      <div className="min-h-screen pb-24" style={{ background: '#F0ECF6' }}>
        <div className="max-w-[470px] mx-auto px-4 py-6">
          <div className="animate-pulse">
            <div className="h-6 bg-white/50 rounded-lg w-40 mb-2" />
            <div className="h-4 bg-white/50 rounded-lg w-64 mb-6" />
            <div className="h-32 bg-white/30 rounded-[18px] mb-5" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24" style={{ background: '#F0ECF6' }}>
      <div className="max-w-[470px] mx-auto px-4 py-6">

        {/* Header */}
        <div className="mb-5">
          <h1 className="font-display text-xl font-bold text-soft-purple-deeper mb-1">
            Your Folder
          </h1>
          <p className="text-soft-muted text-sm font-medium font-body">
            Your files, photos, and videos — all in one place.
          </p>
        </div>

        {/* Upload Button */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full bg-white rounded-[18px] border-2 border-dashed border-soft-lavender p-5 mb-5 flex flex-col items-center gap-2 transition-all active:scale-[0.98] hover:bg-soft-lavender-bg"
        >
          <span className="text-3xl">📁</span>
          <p className="text-sm font-semibold text-soft-purple font-body">
            Upload files, photos, or videos
          </p>
          <p className="text-[11px] text-soft-muted-light font-body">
            Tap to browse your device
          </p>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*,.pdf,.doc,.docx,.txt,.ppt,.pptx,.xls,.xlsx"
          multiple
          className="hidden"
          onChange={handleUpload}
        />

        {/* Filter Tabs */}
        <div className="flex gap-1.5 mb-5 bg-white rounded-xl p-1">
          {([
            { key: 'all' as const, label: `All (${counts.all})` },
            { key: 'image' as const, label: `Photos (${counts.image})` },
            { key: 'video' as const, label: `Videos (${counts.video})` },
            { key: 'file' as const, label: `Files (${counts.file})` },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`flex-1 py-2 rounded-lg text-[11px] font-semibold transition-all font-body ${
                filter === tab.key
                  ? 'bg-soft-purple text-white shadow-sm'
                  : 'text-soft-muted hover:text-soft-purple-deep'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* File List */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-[18px] p-8 text-center">
            <span className="text-4xl block mb-2">📂</span>
            <p className="text-sm font-semibold text-soft-purple-deeper font-body mb-1">
              Nothing here yet
            </p>
            <p className="text-[12px] text-soft-muted font-body">
              Upload some {filter === 'all' ? 'files' : filter === 'image' ? 'photos' : filter === 'video' ? 'videos' : 'files'} to get started.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setPreviewItem(item)}
                className="bg-white rounded-[16px] p-3.5 flex items-center gap-3 text-left transition-all active:scale-[0.98]"
              >
                {/* Thumbnail / Icon */}
                {item.type === 'image' && item.url ? (
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-12 h-12 rounded-[10px] object-cover flex-shrink-0"
                  />
                ) : item.type === 'video' && item.url ? (
                  <div className="w-12 h-12 rounded-[10px] bg-black flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                    <video src={item.url} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <span className="text-white text-sm">▶</span>
                    </div>
                  </div>
                ) : (
                  <div
                    className="w-12 h-12 rounded-[10px] flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: getColor(item.type) + '20' }}
                  >
                    {getIcon(item.type)}
                  </div>
                )}

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-soft-purple-deeper font-body truncate">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-soft-muted font-body">
                    {item.size} · {item.addedAt}
                  </p>
                </div>

                {/* Type badge */}
                <span
                  className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: getColor(item.type) + '20',
                    color: getColor(item.type),
                  }}
                >
                  {item.type === 'image' ? 'Photo' : item.type === 'video' ? 'Video' : 'File'}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Storage info */}
        <div className="mt-5 bg-white rounded-[16px] p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] text-soft-muted font-body font-semibold">Storage used</span>
            <span className="text-[11px] text-soft-muted-light font-body">{items.length} items</span>
          </div>
          <div className="h-1.5 bg-soft-lavender-bg rounded-full overflow-hidden">
            <div
              className="h-full bg-soft-purple rounded-full transition-all"
              style={{ width: `${Math.min((items.length / 50) * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* ── Preview Modal ── */}
      {previewItem && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center"
          style={{ background: 'rgba(45, 34, 84, 0.6)', backdropFilter: 'blur(8px)' }}
          onClick={() => setPreviewItem(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-[470px] px-5 pt-6 pb-8 animate-slideUp"
            style={{ borderRadius: '24px 24px 0 0' }}
          >
            <div className="w-10 h-1 bg-soft-lavender-border rounded-full mx-auto mb-5" />

            {/* Preview */}
            {previewItem.type === 'image' && previewItem.url ? (
              <img
                src={previewItem.url}
                alt={previewItem.name}
                className="w-full h-48 rounded-[16px] object-cover mb-4"
              />
            ) : previewItem.type === 'video' && previewItem.url ? (
              <video
                src={previewItem.url}
                controls
                className="w-full h-48 rounded-[16px] object-cover mb-4 bg-black"
              />
            ) : (
              <div
                className="w-full h-32 rounded-[16px] flex items-center justify-center mb-4"
                style={{ backgroundColor: getColor(previewItem.type) + '15' }}
              >
                <span className="text-5xl">{getIcon(previewItem.type)}</span>
              </div>
            )}

            <h3 className="font-display font-bold text-soft-purple-deeper text-[15px] mb-1 truncate">
              {previewItem.name}
            </h3>
            <p className="text-[12px] text-soft-muted font-body mb-5">
              {previewItem.size} · Added {previewItem.addedAt}
            </p>

            <div className="flex flex-col gap-2">
              {previewItem.url && (
                <a
                  href={previewItem.url}
                  download={previewItem.name}
                  className="w-full py-3.5 rounded-[14px] bg-soft-purple text-white text-[14px] font-semibold font-body text-center transition-all active:scale-[0.98]"
                >
                  📥 Download
                </a>
              )}
              <button
                onClick={() => handleDelete(previewItem.id)}
                className="w-full py-3.5 rounded-[14px] bg-red-50 text-red-500 text-[14px] font-semibold font-body transition-all active:scale-[0.98]"
              >
                🗑️ Delete
              </button>
              <button
                onClick={() => setPreviewItem(null)}
                className="w-full py-3 text-[13px] text-soft-muted font-body"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
