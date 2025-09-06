'use client';
import { X } from 'lucide-react';
import dynamic from 'next/dynamic';
import 'plyr/dist/plyr.css';

// Dynamically import Plyr to avoid SSR issues
const Plyr = dynamic(() => import('plyr-react'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded"></div>
});

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoModal = ({ videoUrl, onClose }: VideoModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative bg-transparent rounded-lg max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 -right-0 text-white hover:text-gray-300"
        >
          <X size={32} />
        </button>
        <Plyr
          source={{
            type: 'video',
            sources: [
              {
                src: videoUrl,
                provider: 'html5',
              },
            ],
          }}
          options={{
            autoplay: true,
          }}
        />
      </div>
    </div>
  );
};

export default VideoModal;