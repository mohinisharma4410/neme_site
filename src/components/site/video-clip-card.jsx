/**
 * Media card for the Physical AI showcase.
 *
 * Ships real footage with zero layout change: add `src` to the clip in
 * site-data.js and this renders a compressed, muted, looping <video> with the
 * poster as its first frame. Without `src` it shows the poster under a subtle
 * motion overlay as a placeholder.
 */
export function VideoClipCard({ clip, priority = false }) {
  return (
    <figure className="glow-ring overflow-hidden rounded-[24px]">
      <div className="relative aspect-video overflow-hidden bg-ash">
        {clip.src ? (
          <video
            src={clip.src}
            poster={clip.poster}
            autoPlay
            loop
            muted
            playsInline
            preload={priority ? 'auto' : 'none'}
            aria-label={clip.caption}
            className="size-full object-cover"
          />
        ) : (
          <>
            <img
              src={clip.poster}
              alt={clip.caption}
              loading={priority ? 'eager' : 'lazy'}
              className="size-full object-cover"
            />
            <div
              aria-hidden="true"
              className="video-shimmer pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light"
            />
          </>
        )}
      </div>
      <figcaption className="flex items-center justify-between px-4 py-3">
        <span className="text-sm text-graphite">{clip.caption}</span>
        <span className="text-[11px] font-medium tracking-wide text-smoke uppercase">
          {clip.kind}
        </span>
      </figcaption>
    </figure>
  )
}