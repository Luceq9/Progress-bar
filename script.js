const translation = {
	en: {
		prev: 'Back',
		next: 'Next',
	},
	pl: {
		prev: 'Wstecz',
		next: 'Następny',
	},
}

const progress = document.querySelector('.progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

function updateTranslation(lang) {
	document.querySelector('#prev').textContent = translation[lang].prev
	document.querySelector('#next').textContent = translation[lang].next
}

document.querySelector('.pl-flag').addEventListener('click', () => {
	updateTranslation('pl')
})

document.querySelector('.en-flag').addEventListener('click', () => {
	updateTranslation('en')
})

next.addEventListener('click', () => {
	currentActive++
	if (currentActive > circles.length) {
		currentActive = circles.length
	}
	update()
})

prev.addEventListener('click', () => {
	currentActive--
	if (currentActive > circles.length) {
		currentActive = circles.length
	}
	update()
})

function update() {
	circles.forEach((circle, idx) => {
		if (idx < currentActive) {
			circle.classList.add('active')
		} else {
			circle.classList.remove('active')
		}
	})
	if (currentActive === 1) {
		prev.disabled = true
	} else if (currentActive === circles.length) {
		next.disabled = true
	} else {
		prev.disabled = false
		next.disabled = false
	}
	if (currentActive > circles.length) {
		currentActive = circles.length
	}
	let actives = document.querySelectorAll('.active')
	progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
}
