<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="19px">
    <defs>
    <filter id="Filter_0">
        <feFlood flood-color="rgb(110, 119, 74)" flood-opacity="1" result="floodOut" />
        <feComposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut" />
        <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
    </filter>

    </defs>
    <g filter="url(#Filter_0)">
    <path fill-rule="evenodd"
    d="M27.005,4.059 C27.005,1.816 25.198,-0.001 22.970,-0.001 L4.040,-0.001 C1.811,-0.001 0.005,1.816 0.005,4.059 L0.005,14.941 C0.005,17.182 1.811,19.000 4.040,19.000 L22.970,19.000 C25.198,19.000 27.005,17.182 27.005,14.941 L27.005,4.059 ZM10.805,14.091 L10.805,3.869 L18.515,8.980 L10.805,14.091 Z"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: "IconYoutube",
}
</script>