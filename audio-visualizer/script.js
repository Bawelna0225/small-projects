const container = document.getElementById('container')
const canvas = document.getElementById('canvas1')
const file = document.getElementById('fileupload')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')
let audioSource
let analyser


