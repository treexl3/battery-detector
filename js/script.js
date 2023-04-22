initBattery();

function initBattery() {
   const batteryLiquid = document.querySelector('.Bliquid');
   const batteryStatus = document.querySelector('.Bstatus');
   const Bpercentage = document.querySelector('.Bpercentage');
   navigator.getBattery().then((batt) => {
      console.log(batt);
      updateBattery = () => {
         let level = Math.floor(batt.level * 100);
         Bpercentage.innerHTML = level + '%';
         batteryLiquid.style.height = `${parseInt(level)}%`;
         if (level == 100) {
            batteryStatus.innerHTML = 'Battery Full <i class="ri-battery-2-fill green-color"></i>';
            batteryLiquid.style.height = '103%';
         } else if (level <= 20 & !batt.charging) {
            batteryStatus.innerHTML = 'Low Charge <i class="ri-plug-line animated-red"></i>';
         } else if (batt.charging) {
            batteryStatus.innerHTML = 'Charging ... <i class="ri-flashlight-line animated-green"></i>';
         } else {
            batteryStatus.innerHTML = "";
         }

         if (level <= 20) {
            batteryLiquid.classList.add('gradient-color-red');
            batteryLiquid.classList.remove('gradiend-color-green', 'gradiend-color-orange', 'gradient-color-yellow');
         } else if (level <= 48) {
            batteryLiquid.classList.add('gradient-color-orange');
            batteryLiquid.classList.remove('gradiend-color-green', 'gradiend-color-red', 'gradient-color-yellow');
         } else if (level <= 80) {
            batteryLiquid.classList.add('gradient-color-yellow');
            batteryLiquid.classList.remove('gradiend-color-green', 'gradiend-color-orange', 'gradient-color-red');
         } else {
            batteryLiquid.classList.add('gradient-color-green');
            batteryLiquid.classList.remove('gradiend-color-yellow', 'gradiend-color-orange', 'gradient-color-red');
         }
      }
      updateBattery();
   });
}