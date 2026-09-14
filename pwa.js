(()=>{
  if(!('serviceWorker' in navigator)||!window.isSecureContext)return;

  let deferredPrompt=null;
  window.addEventListener('beforeinstallprompt',event=>{
    event.preventDefault();
    deferredPrompt=event;
    window.dispatchEvent(new CustomEvent('captaacademy:installavailable'));
  });

  window.installCaptaAcademy=async()=>{
    if(!deferredPrompt)return false;
    deferredPrompt.prompt();
    const choice=await deferredPrompt.userChoice;
    deferredPrompt=null;
    return choice?.outcome==='accepted';
  };

  const hadController=Boolean(navigator.serviceWorker.controller);
  let reloading=false;
  let registrationRef=null;

  const refreshRegistration=()=>{
    if(registrationRef)registrationRef.update().catch(()=>{});
  };

  navigator.serviceWorker.addEventListener('controllerchange',()=>{
    if(!hadController||reloading)return;
    reloading=true;
    window.location.reload();
  });

  document.addEventListener('visibilitychange',()=>{
    if(document.visibilityState==='visible')refreshRegistration();
  });
  window.addEventListener('online',refreshRegistration);

  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('sw.js?v=10-update-lifecycle-safe-shell',{updateViaCache:'none'})
      .then(registration=>{
        registrationRef=registration;
        return registration.update();
      })
      .catch(()=>{});
  });

  window.addEventListener('appinstalled',()=>{
    deferredPrompt=null;
    window.dispatchEvent(new CustomEvent('captaacademy:installed'));
  });
})();
