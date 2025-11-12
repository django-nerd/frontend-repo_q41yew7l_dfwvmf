import React from 'react'

export default function Map() {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.918391227714!2d-9.1711919!3d38.736946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1932d417a6df07%3A0x400ebbde49036d0!2sLisbon!5e0!3m2!1sen!2spt!4v1680720000000!5m2!1sen!2spt`
  return (
    <section id="map" className="relative pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl overflow-hidden ring-1 ring-sky-100 shadow-md">
          <iframe
            title="Mapa Coroa & Costa"
            src={mapSrc}
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
