<!--./src/components/Polygon.vue -->

<template>

  <div class="section text-center m-4">

  </div>
</template>

<script>
const { Web3 } = require('web3');

const {Decimal} = require("decimal.js");
const {setIntervalAsync} = require("set-interval-async/fixed");
const {BigNumber} = require("bignumber.js");

const web3js = new Web3("https://rpc-mumbai.maticvigil.com/");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
</script>
