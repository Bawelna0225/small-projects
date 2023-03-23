const container = document.getElementById('container')
const canvas = document.getElementById('canvas1')
const file = document.getElementById('fileupload')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')
let audioSource
let analyser

file.addEventListener('change', function () {
	const files = this.files
	const audio1 = document.getElementById('audio1')
	audio1.src = URL.createObjectURL(files[0])
	audio1.load()
	audio1.play()

})

