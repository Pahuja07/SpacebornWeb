(function () {
  var box = document.getElementById('c');
  if (!box) return;
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var width = 1;
  var height = 1;
  var dpr = 1;
  var stars = [];
  var started = false;

  box.replaceChildren(canvas);

  function resize() {
    var rect = box.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars = Array.from({ length: Math.max(28, Math.floor(width / 13)) }, function () {
      return { x: Math.random(), y: Math.random() * .72, size: .5 + Math.random() * 1.8, speed: .15 + Math.random() * .45, alpha: .25 + Math.random() * .65 };
    });
  }

  function line(x1, y1, x2, y2, color, weight) {
    ctx.strokeStyle = color;
    ctx.lineWidth = weight || 1;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  function drawPortal(cx, cy, size, time) {
    var pulse = 1 + Math.sin(time * 1.7) * .04;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(pulse, pulse);
    ctx.shadowColor = '#9b4dff';
    ctx.shadowBlur = 32;
    ctx.fillStyle = 'rgba(22, 7, 43, .85)';
    ctx.strokeStyle = '#c084fc';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.lineTo(size * .86, -size * .48);
    ctx.lineTo(size * .86, size * .48);
    ctx.lineTo(0, size);
    ctx.lineTo(-size * .86, size * .48);
    ctx.lineTo(-size * .86, -size * .48);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 18;
    ctx.strokeStyle = '#f0d8ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -size * .67);
    ctx.lineTo(size * .58, -.33 * size);
    ctx.lineTo(size * .58, .33 * size);
    ctx.lineTo(0, size * .67);
    ctx.lineTo(-size * .58, .33 * size);
    ctx.lineTo(-size * .58, -.33 * size);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = 'rgba(192,132,252,.16)';
    ctx.fill();
    ctx.shadowBlur = 28;
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(0, 0, size * .12, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function draw(time) {
    if (!started) return;
    var t = reduced ? 0 : time * .001;
    var cx = width * .5;
    var horizon = height * .59;
    var cy = height * .42;
    var size = Math.min(width, height) * .17;
    ctx.clearRect(0, 0, width, height);
    var background = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * .75);
    background.addColorStop(0, 'rgba(89, 28, 135, .38)');
    background.addColorStop(.44, 'rgba(28, 8, 50, .2)');
    background.addColorStop(1, '#030207');
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    stars.forEach(function (star) {
      var y = ((star.y + t * star.speed * .025) % .78) * height;
      ctx.globalAlpha = star.alpha;
      ctx.fillStyle = '#d8b4fe';
      ctx.shadowColor = '#a855f7';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(star.x * width, y, star.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    for (var i = 0; i < 11; i += 1) {
      var y = horizon + Math.pow(i / 10, 1.7) * (height - horizon + 30);
      line(0, y, width, y, 'rgba(168,85,247,.18)', 1);
    }
    for (var j = -10; j <= 10; j += 1) {
      var bottomX = cx + j * width * .12;
      line(cx + j * 7, horizon, bottomX, height, 'rgba(168,85,247,.18)', 1);
    }
    line(0, horizon, width, horizon, 'rgba(216,180,254,.45)', 1.5);

    ctx.globalAlpha = .7;
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 8]);
    ctx.beginPath();
    ctx.arc(cx, cy, size * 1.55, t * .3, t * .3 + Math.PI * 1.35);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;
    drawPortal(cx, cy, size, t);
    requestAnimationFrame(draw);
  }

  resize();
  new ResizeObserver(resize).observe(box);
  started = true;
  requestAnimationFrame(draw);
}());
