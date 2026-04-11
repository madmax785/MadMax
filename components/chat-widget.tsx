"use client";

import { useEffect } from "react";

export function BotpressCleaner() {
  useEffect(() => {
    // 1. Botpress'i yükle
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
    injectScript.async = true;
    document.body.appendChild(injectScript);

    const botScript = document.createElement("script");
    botScript.src = "https://files.bpcontent.cloud/2026/04/08/14/20260408140424-2539MZMF.js";
    botScript.async = true;
    document.body.appendChild(botScript);

    // 2. Yazıyı Kapatacak "Mini Perde" CSS'i
    const style = document.createElement('style');
    style.innerHTML = `
      /* Botpress penceresinin en altındaki reklam alanını hedef alıyoruz */
      iframe[aria-label="Messaging window"] {
        /* Alt kısımdaki reklamı kapatmak için bir maske oluşturuyoruz */
        clip-path: inset(0px 0px 40px 0px) !important; 
      }

      /* Alternatif olarak: O kısma kendi markanı basan bir katman */
      .bp-custom-overlay {
        position: fixed;
        bottom: 20px; /* Botpress'in konumuna göre ayarla */
        right: 40px;
        width: 150px;
        height: 25px;
        background: white; /* Veya temanın rengi */
        z-index: 2147483647;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: bold;
        color: #3b82f6;
        pointer-events: none; /* Altındaki butonlara tıklamayı engellemez */
      }
    `;
    document.head.appendChild(style);

    // Mini perdemizi ekleyelim
    const overlay = document.createElement('div');
    overlay.className = 'bp-custom-overlay';
    overlay.innerText = 'Yunus Yazılım Destek';
    document.body.appendChild(overlay);

  }, []);

  return null; // Bu bileşen sadece arka planda çalışır
}