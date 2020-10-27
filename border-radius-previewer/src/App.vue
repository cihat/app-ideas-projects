<template>
  <div>
    <section>
      <div class="container">
        <div class="iso">
          <div class="wrap" style="--v: 0; --h: 0; --ax: 0; --val: 45; --sf: 1">
            <input type="range" value="41" id="rx01" />
            <label for="rx01"
              ><span>top left </span>
              <var>rx</var>
              <output></output>
            </label>
          </div>
          <div class="wrap" style="--v: 0; --h: 0; --ax: 1; --val: 44; --sf: 1">
            <input type="range" value="44" id="ry00" />
            <label for="ry00"
              ><span>top left</span>
              <var>ry</var>
              <output></output>
            </label>
          </div>
          <div
            class="wrap"
            style="--v: 0; --h: 1; --ax: 0; --val: 41; --sf: -1"
          >
            <input type="range" value="41" id="rx01" />
            <label for="rx01"
              ><span>top right</span>
              <var>rx</var>
              <output></output>
            </label>
          </div>
          <div class="wrap" style="--v: 0; --h: 1; --ax: 1; --val: 39; --sf: 1">
            <input type="range" value="39" id="ry01" />
            <label for="ry01"
              ><span>top right</span>
              <var>ry</var>
              <output></output>
            </label>
          </div>
          <div class="wrap" style="--v: 1; --h: 0; --ax: 0; --val: 46; --sf: 1">
            <input type="range" value="46" id="rx10" />
            <label for="rx10"
              ><span>bottom left</span>
              <var>rx</var>
              <output></output>
            </label>
          </div>
          <div
            class="wrap"
            style="--v: 1; --h: 0; --ax: 1; --val: 42; --sf: -1"
          >
            <input type="range" value="42" id="ry10" />
            <label for="ry10"
              ><span>bottom left</span>
              <var>ry</var>
              <output></output>
            </label>
          </div>
          <div
            class="wrap"
            style="--v: 1; --h: 1; --ax: 0; --val: 44; --sf: -1"
          >
            <input type="range" value="44" id="rx11" />
            <label for="rx11"
              ><span>bottom right</span>
              <var>rx</var>
              <output></output>
            </label>
          </div>
          <div
            class="wrap"
            style="--v: 1; --h: 1; --ax: 1; --val: 45; --sf: -1"
          >
            <input type="range" value="45" id="ry11" />
            <label for="ry11"
              ><span>bottom right</span>
              <var>ry</var>
              <output></output>
            </label>
          </div>
        </div>
        <div
          id="blob"
          style="
            --rx00: 45%;
            --ry00: 44%;
            --rx01: 41%;
            --ry01: 39%;
            --rx10: 46%;
            --ry10: 42%;
            --rx11: 44%;
            --ry11: 45%;
          "
        ></div>
      </div>
    </section>
    <pre id="code"></pre>
  </div>
</template>

<script>
export default {
  const _BLOB = document.getElementById('blob'), 
			_CODE = document.getElementById('code'), 
			DIMS = ['x', 'y'];

function code(flag = 0) {
	const _R = getComputedStyle(_BLOB).borderRadius;
	
	if(!_R) { if(flag) _CODE.style.display = 'none' }
	else _CODE.textContent = `border-radius: ${_R}`
};

function update(e) {
	const _TG = e.target;
	
	if(_TG.tagName.toLowerCase() === 'input') {
		const AX = +getComputedStyle(_TG).getPropertyValue('--ax'), 
					V = +getComputedStyle(_TG).getPropertyValue('--v'), 
					H = +getComputedStyle(_TG).getPropertyValue('--h');
		
		let val = +_TG.value;		
		_BLOB.style.setProperty(`--r${DIMS[AX]}${V}${H}`, `${val}%`);
		_TG.parentNode.style.setProperty(`--val`, val);
		
		code()
	}
};

code(1);
addEventListener('input', update, false);
addEventListener('change', update, false);
};
</script>

<style lang="scss">
$img: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/2017/17_05_a_amur_leopard_18.jpg);
$d: 17.5em;
$t: 0.65s;

$cnormal: #ccc;
$chlight: purple;

$track-w: $d;
$track-h: 0.125em;

$thumb-d: 1.5em;

$label-h: 4em;

@mixin track() {
  box-sizing: border-box;
  width: $track-w;
  height: $track-h;
  background: transparent;
}

@mixin thumb() {
  box-sizing: border-box;
  border: solid 3px $chlight;
  width: $thumb-d;
  height: $thumb-d;
  border-radius: 50%;
  background: mix($chlight, #fff, 20%);
  pointer-events: auto;
  cursor: move;
}

* {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  margin: 0;
  min-height: 100vh;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.container {
  position: relative;
  font: 1.125em/ 1.25 segoe script, comic sans ms, cursive;

  &:before {
    position: absolute;
    top: -$thumb-d;
    right: -$thumb-d;
    bottom: -$thumb-d;
    left: -$thumb-d;
    background: linear-gradient($cnormal $track-h, transparent 0) 50% #{0.5 *
        ($thumb-d - $track-h)}/ #{$d} #{$d + $thumb-d} repeat-y,
      linear-gradient(90deg, $cnormal $track-h, transparent 0) #{0.5 *
        ($thumb-d - $track-h)} 50% / #{$d + $thumb-d} #{$d} repeat-x;
    content: "";
  }
}

#blob {
  box-sizing: border-box;
  border: solid 0.5em transparent;
  width: $d;
  height: $d;
  border-radius: var(--rx00) var(--rx01) var(--rx11) var(--rx10) / var(--ry00)
    var(--ry01) var(--ry11) var(--ry10);
  transform: scale(0.9875);
  background: $img 50% / cover padding-box /* cover layer */,
    linear-gradient(#ff8a00, #da1b60) border-box /* gradient border layer */;
}

.iso {
  isolation: isolate;
}

.wrap {
  --flag: 0;
  position: absolute;
  top: calc(var(--v) * (1 - var(--ax)) * 100%);
  left: calc(var(--h) * var(--ax) * 100%);
  width: $track-w;
  height: $thumb-d;
  --rot: calc(var(--ax) * 90deg);
  transform: translate(
      calc(var(--h) * var(--ax) *#{$thumb-d} - 50%),
      calc(-1 * (1 - var(--v)) * (1 - var(--ax)) *#{$thumb-d} - 50%)
    )
    rotate(var(--rot)) translate(50%, 50%) scalex(var(--sf));
  mix-blend-mode: multiply;
  pointer-events: none;
}

input {
  &::-webkit-slider-runnable-track,
  &::-webkit-slider-thumb,
  & {
    -webkit-appearance: none;
  }

  z-index: var(--flag);
  border: solid 0 transparent;
  width: inherit;
  height: inherit;
  background: transparent;
  font: inherit;
  filter: Grayscale(calc(1 - var(--flag)))
    Contrast(calc(0.1 + 0.9 * var(--flag)))
    Brightness(calc(1.75 - 0.75 * var(--flag)));
  transition: filter $t;

  &::-webkit-slider-runnable-track {
    @include track;
  }

  &::-moz-range-track {
    @include track;
  }

  &::-ms-track {
    @include track;
  }

  &::-webkit-slider-thumb {
    margin-top: 0.5 * ($track-h - $thumb-d);
    @include thumb;
  }

  &::-moz-range-thumb {
    @include thumb;
  }

  &::-ms-thumb {
    margin-top: 0;
    @include thumb;
  }

  &::-ms-fill-lower,
  &::-ms-fill-upper {
    background: transparent;
  }

  &::-ms-tooltip {
    display: none;
  }

  &:focus {
    outline: solid 0px transparent;

    &,
    & + label {
      --flag: 1;
    }
  }
}

label {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: solid 3px transparent;
  padding: 0.5em 1vmin;
  position: absolute;
  top: 100%;
  left: 0;
  max-width: 8em;
  height: $label-h;
  border-radius: 0.375em;
  --pos: translate(
      calc(
        var(--val) / 100 * (#{$track-w} - #{$thumb-d}) + #{0.5 * $thumb-d} - 50%
      ),
      calc(
        -1 * ((1 - var(--ax)) * (1 - var(--v)) + var(--ax) * var(--h)) * (100% +
              #{$thumb-d})
      )
    )
    scalex(var(--sf)) rotate(calc(-1 * var(--rot)))
    translate(calc(var(--ax) * (1 - 2 * var(--h)) * (#{0.5 * $label-h} - 50%)));
  transform: var(--pos) scale(var(--flag));
  opacity: calc(0.999 * var(--flag));
  background: $chlight padding-box;
  color: #fff;
  text-align: center;
  transition: opacity $t;
  pointer-events: auto;
}

span {
  width: 100%;
}

var {
  font: italic 1.25em/ 1 times new roman, serif;
}

output {
  color: yellow;
  font: 1em/ 1.25 consolas, monaco, monospace;

  &:before {
    content: ": ";
  }

  &:after {
    counter-reset: val var(--val);
    content: counter(val) "%";
  }
}

pre {
  padding: 0.5em;
  background: #333;
  color: #ddd;
  font: 1em/ 1.25 consolas, monaco, monospace;
}
</style>