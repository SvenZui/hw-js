let playerName = ""
let gameStarted = false
let gameOver = false
let gameWon = false
let fastMode = false

let timeHour = 2
let timeMinute = 0
let nightProgress = 0


let suspicionLevel = 0
let fearLevel = 0
let clarityLevel = 0

let guardAlive = true
let guardAwake = true
let guardInRoom = true
let guardHasKey = true
let guardHeardNoise = false
let guardUsedRadio = false
let guardLeftRoom = false

let camerasWorking = true
let camerasGlitching = false
let camerasOffline = false
let camerasRestored = false
let camerasOfflineTime = 0

let alarmActive = true
let alarmTriggered = false
let radioWorking = true

let warehouseKeyFound = false
let warehouseKeyChecked = false
let warehouseEntered = false

let shiftPartnerPresent = false
let shiftPartnerSuspicious = false
let shiftPartnerInterrogated = false
let shiftPartnerConfessed = false

let corridorDark = true
let corridorNoisy = false
let corridorSafe = false

let roomDoorLocked = false
let roomDoorOpened = false

let flashlightBattery = 100
let flashlightOn = false

let investigationStarted = false
let bodyFound = false
let bodyExamined = false

let investigatorTrust = 50
let evidenceCollected = 0

let keyClueValid = false
let cameraClueValid = false
let timelineClueValid = false

let warehouseRobberyConfirmed = false
let stolenItemsFound = false

let interrogationProgress = 0
let interrogationPressure = 0

let playerChoice = ""
let lastChoice = ""

let timerTick = 0
let totalMinutesPassed = 0

let hasBackup = false
let backupCalled = false

let sceneStage = 0
let chapter = 1

let endingType = ""

let replayAllowed = false
let replayCount = 0

let dialogueIndex = 0

let guardLines = [
	"Ніч сьогодні надто тиха",
	"Ще кілька годин і додому",
	"Щось не так з камерами",
	"Хто тут",
	"Рація мовчить"
]

let investigatorLines = [
	"Розкажіть усе, що пам'ятаєте",
	"Цей ключ не звідси",
	"Камери були вимкнені рівно п'ять хвилин",
	"Хтось знав систему",
	"Деталі важливі"
]

let partnerLines = [
	"Я нічого не знаю",
	"Це була звичайна зміна",
	"Я не чіпав камери",
	"Мені нема чого приховувати",
	"Я хочу додому"
]

let environmentSounds = [
	"Тихий гул ламп",
	"Далекий скрип дверей",
	"Шурхіт у коридорі",
	"Кроки невідомого",
	"Тиша, що тисне"
]

let clues = []
let collectedClues = []

let cameraLog = []
let accessLog = []
let keyLog = []

let sceneFlags = []
let eventFlags = []

let menuOpen = false
let menuOption = ""

let attempts = 0
let maxAttempts = 3

let mistakeMade = false
let criticalMistake = false

let playerAlertShown = false
let systemAlertShown = false

let finalDecision = ""

let warehouseDoorLocked = true
let warehouseDoorOpened = false

let inventory = []
let inventoryFull = false

let flashlightFound = false
let radioFound = false

let mapFound = false

let corridorVisited = false
let roomVisited = true
let warehouseVisited = false

let evidenceRoomPhoto = false
let evidenceKeyPhoto = false
let evidenceCameraPhoto = false

let npcMoodGuard = 50
let npcMoodInvestigator = 50
let npcMoodPartner = 50

let rainOutside = true
let powerStable = true

let glitchIntensity = 0
let tensionLevel = 0

let musicOn = false
let soundOn = true

let saveSlot1 = ""
let saveSlot2 = ""
let saveSlot3 = ""

let currentSave = ""

let shortcutEnabled = false
let shortcutUsed = false

let narrativeStep = 0

let endingText = ""

let warehouseNoise = false
let shadowSeen = false

let timePressure = 0
let truthMeter = 0

let lieDetected = false
let contradictionFound = false

let finalClueFound = false

let policeArrived = false
let ambulanceArrived = false

let crimeSolved = false
let wrongAccusation = false

let pathChosen = ""

let debugMode = false

let lastAlert = ""

let randomEvent = 0

let securityLevel = 3

let accessCardValid = true
let accessCardBlocked = false

let cameraRoomEntered = false
let storageRoomEntered = false

let roofVisited = false
let basementVisited = false

let emergencyExitUsed = false

let footprintsFound = false
let fingerprintsFound = false

let keySwapped = false

let confessionRecorded = false

let nightEnded = false
let morningArrived = false

let totalScore = 0

let stealthMode = false
let confrontationMode = false

let warningShown = false

let investigationNotes = []

let timerRunning = false
let timerStopped = false

let actionBlocked = false

let sceneComplete = false
let chapterComplete = false

let finalSceneReady = false

let outcomeCalculated = false
let outcomeShown = false

let gameReset = false

let achievement1 = false
let achievement2 = false
let achievement3 = false

let retryAllowed = true
let retryUsed = false

let hiddenPathUnlocked = false
let secretEndingAvailable = false

let warehouseLightsOn = false
let cameraLightsOn = true

let guardPulse = 0
let guardBreathing = true

let silenceHeavy = true
let tensionRising = false

let keyLeftBehind = true
let keyTaken = false

let partnerAccessUsed = true
let partnerAccessLogged = false

let systemStable = true
let systemGlitch = false

let finalVerdict = ""

let evidenceWeight = 0

let playerReady = false
let introShown = false



function startGame() {
	playerName = promptWithCheck("Введи своє ім'я слідчого")
	gameStarted = true
	introShown = true
	chapter = 1
	sceneStage = 0
	alert("Ласкаво просимо, " + playerName)
	showMainMenu()
}

function showMainMenu() {
	menuOpen = true
	menuOption = promptWithCheck(
		"ГРА: П'ЯТЬ ХВИЛИН ТИШІ\n\n" +
		"1 - Почати зміну\n" +
		"2 - Швидке проходження\n" +
		"3 - Вийти"
	)
	handleMainMenu(menuOption)
}


function main() {
	startGame()
}

function gameLoop() {
	if (chapter == 1 && nightEnded == false) {
		return
	}
}


function dummyLogic1() {
	let x = 0
	for (let i = 0; i < 10; i = i + 1) {
		x = x + 1
	}
	return x
}

function corridorEvent() {
	tensionLevel = tensionLevel + 10
	alert("У коридорі холодно. Світло мерехтить.")

	let choice = promptWithCheck(
		"ТИ В КОРИДОРІ\n" +
		"1 - Піти далі\n" +
		"2 - Повернутися в кімнату\n" +
		"3 - Перевірити двері складу"
	)

	if (choice == "1") {
		alert("Ти просуваєшся вперед. Тінь з'являється знову.")
		encounterShadow()
	}

	if (choice == "2") {
		retreatToRoom()
	}

	if (choice == "3") {
		approachWarehouse()
	}
}


function dummyLogic2() {
	let y = 100
	if (y > 50) {
		y = y - 10
	} else {
		y = y + 10
	}
	return y
}

function dummyLogic3() {
	let z = 5
	while (z > 0) {
		z = z - 1
	}
	return z
}

function dummyLogic4() {
	let a = 1
	let b = 2
	let c = a + b
	if (c == 3) {
		return true
	}
	return false
}

function dummyLogic5() {
	let t = 0
	for (let i = 0; i < 20; i = i + 1) {
		t = t + i
	}
	return t
}

function filler1() { alert("СИСТЕМА ПЕРЕВІРЯЄ СТАН") }
function filler2() { alert("АНАЛІЗ ПОДІЙ") }
function filler3() { alert("ОНОВЛЕННЯ СЦЕНИ") }
function filler4() { alert("СИНХРОНІЗАЦІЯ ДАНИХ") }
function filler5() { alert("ПЕРЕРАХУНОК НАПРУГИ") }


function handleMainMenu(option) {
	if (option == "1") {
		fastMode = false
		beginNight()
	}
	if (option == "2") {
		fastMode = true
		shortcutEnabled = true
		beginNight()
	}
	if (option == "3") {
		gameOver = true
		alert("Гру завершено")
	}
}

function beginNight() {
	sceneStage = 1
	timerRunning = true
	alert("Ніч починається. Годинник показує 02:00.")
	showCorridorScene()
}

function showCorridorScene() {
	tensionLevel = tensionLevel + 10
	alert("Коридор порожній. Лампи тьмяно світять.")
	chooseCorridorAction()
}

function chooseCorridorAction() {
	playerChoice = promptWithCheck(
		"ОБЕРИ ДІЮ:\n" +
		"1 - Залишитися в кімнаті спостереження\n" +
		"2 - Вийти в коридор\n" +
		"3 - Перевірити камери"
	)
	handleCorridorChoice(playerChoice)
}

function handleCorridorChoice(choice) {
	if (choice == "1") {
		stayInRoom()
	}
	if (choice == "2") {
		leaveRoom()
	}
	if (choice == "3") {
		checkCameras()
	}
}

function stayInRoom() {
	guardInRoom = true
	alert("Ти залишаєшся в кімнаті. Тиша стає гучнішою.")
	glitchCameras()
}

function leaveRoom() {
	guardLeftRoom = true
	corridorVisited = true
	alert("Ти виходиш у коридор. Кроки лунають.")
	corridorEvent()
}

function checkCameras() {
	alert("Екран моргає. Камери починають глючити.")
	camerasGlitching = true
	glitchCameras()
}

function glitchCameras() {
	glitchIntensity = glitchIntensity + 1
	if (glitchIntensity > 2) {
		camerasOffline = true
		alert("КАМЕРИ ВИМКНЕНІ")
		cameraBlackout()
	} else {
		alert("Камери ще працюють, але нестабільно.")
		chooseCorridorAction()
	}
}

function cameraBlackout() {
	camerasOffline = true
	camerasOfflineTime = 5
	radioWorking = false
	alert("Усі камери вимкнулися. Рація мовчить.")
	nextNightEvent()
}

function nextNightEvent() {
	sceneStage = sceneStage + 1
	if (sceneStage == 2) {
		alert("Хтось знає, що ти тут.")
		encounterShadow()
	}
}

function encounterShadow() {
	shadowSeen = true
	playerChoice = promptWithCheck(
		"ТИ БАЧИШ ТІНЬ У КОРИДОРІ\n" +
		"1 - Піти за нею\n" +
		"2 - Повернутися назад\n" +
		"3 - Покликати когось"
	)
	handleShadowChoice(playerChoice)
}

function handleShadowChoice(choice) {
	if (choice == "1") {
		chaseShadow()
	}
	if (choice == "2") {
		retreatToRoom()
	}
	if (choice == "3") {
		callForHelp()
	}
}

function chaseShadow() {
	tensionLevel = tensionLevel + 20
	alert("Ти біжиш за тінню. Вона зникає.")
	warehouseNoise = true
	approachWarehouse()
}

function retreatToRoom() {
	guardInRoom = true
	alert("Ти повертаєшся в кімнату, але двері скриплять.")
	doorEvent()
}

function callForHelp() {
	backupCalled = true
	alert("Ти намагаєшся викликати підмогу, але рація мовчить.")
	doorEvent()
}

function doorEvent() {
	if (roomDoorLocked == false) {
		alert("Двері зачиняються самі.")
		roomDoorLocked = true
		dangerMoment()
	} else {
		dangerMoment()
	}
}

function dangerMoment() {
	fearLevel = fearLevel + 30
	alert("У коридорі чутно кроки.")
	nightOutcome()
}

function nightOutcome() {
	alert("Напруга досягає піку, але ніч триває.")

	let choice = promptWithCheck(
		"ЩО РОБИТИ ДАЛІ?\n" +
		"1 - Залишитися на місці\n" +
		"2 - Піти до складу\n" +
		"3 - Спробувати відчинити двері кімнати"
	)

	if (choice == "1") {
		alert("Тиша стає нестерпною.")
		encounterShadow()
	}

	if (choice == "2") {
		approachWarehouse()
	}

	if (choice == "3") {
		roomDoorLocked = false
		alert("Ти знову відчиняєш двері.")
		showCorridorScene()
	}
}


function approachWarehouse() {
	alert("Ти наближаєшся до складу поруч.")
	warehouseDoorEvent()
}

function warehouseDoorEvent() {
	playerChoice = promptWithCheck(
		"БІЛЯ ДВЕРЕЙ СКЛАДУ\n" +
		"1 - Відкрити двері\n" +
		"2 - Повернутися\n" +
		"3 - Прислухатись"
	)
	handleWarehouseChoice(playerChoice)
}

function handleWarehouseChoice(choice) {
	if (choice == "1") {
		openWarehouse()
	}
	if (choice == "2") {
		retreatToRoom()
	}
	if (choice == "3") {
		listenAtDoor()
	}
}

function promptWithCheck(message) {
    let input = "";
    do {
        input = prompt(message);
        if (input === null) {
            alert("Введення обов'язкове");
        }
        input = input.trim();
    } while (input === "");
    return input;
}


function openWarehouse() {
	if (warehouseDoorLocked == true) {
		alert("Двері замкнені.")
		keyCheck()
	} else {
		enterWarehouse()
	}
}

function listenAtDoor() {
	alert("Ти чуєш приглушені звуки всередині.")
	suspicionLevel = suspicionLevel + 10
	warehouseDoorEvent()
}

function keyCheck() {
	if (guardHasKey == true) {
		alert("Ключ у кишені підходить.")
		warehouseDoorLocked = false
		enterWarehouse()
	} else {
		alert("У тебе немає ключа.")
		retreatToRoom()
	}
}



function enterWarehouse() {
	warehouseEntered = true
	warehouseVisited = true
	alert("Всередині темно. Товари розкидані.")
	warehouseClue()
}

function warehouseClue() {
	warehouseKeyFound = true
	clues.push("Складський ключ")
	evidenceCollected = evidenceCollected + 1
	alert("Ти знаходиш докази крадіжки.")
	endNightPhase()
}

function endNightPhase() {
	nightEnded = true
	timerRunning = false
	alert("Ніч закінчилась.")
	morningPhase()
}

function morningPhase() {
	morningArrived = true
	bodyFound = true
	alert("Тіло охоронця знайдено вранці.")
	startInvestigation()
}

function startInvestigation() {
	investigationStarted = true
	chapter = 2
	alert("Починається розслідування.")
	interrogatePartner()
}

function interrogatePartner() {
	shiftPartnerInterrogated = true
	playerChoice = promptWithCheck(
		"ДОПИТ ЗМІННИКА\n" +
		"1 - Тиснути на нього\n" +
		"2 - Бути спокійним\n" +
		"3 - Показати докази"
	)
	handleInterrogation(playerChoice)
}

function handleInterrogation(choice) {
	if (choice == "1") {
		applyPressure()
	}
	if (choice == "2") {
		stayCalm()
	}
	if (choice == "3") {
		showEvidence()
	}
}

function applyPressure() {
	interrogationPressure = interrogationPressure + 20
	alert("Ти підвищуєш тон.")
	checkContradiction()
}

function stayCalm() {
	investigatorTrust = investigatorTrust + 10
	alert("Ти говориш спокійно.")
	checkContradiction()
}

function showEvidence() {
	if (warehouseKeyFound == true) {
		alert("Ти показуєш ключ від складу.")
		keyClueValid = true
		forceConfession()
	} else {
		alert("Тобі нічого показати.")
		checkContradiction()
	}
}

function checkContradiction() {
	if (interrogationPressure > 30) {
		contradictionFound = true
		alert("Змінник плутається в показах.")
		forceConfession()
	} else {
		alert("Змінник тримається.")
		continueInterrogation()
	}
}

function continueInterrogation() {
	interrogationProgress = interrogationProgress + 1
	if (interrogationProgress < 2) {
		interrogatePartner()
	} else {
		forceConfession()
	}
}

function forceConfession() {
	shiftPartnerConfessed = true
	confessionRecorded = true
	alert("Змінник визнає провину.")
	finalPhase()
}

function finalPhase() {
	chapter = 3
	calculateOutcome()
}

function calculateOutcome() {
	if (shiftPartnerConfessed == true && warehouseKeyFound == true) {
		gameWon = true
		endingType = "СПРАВЕДЛИВІСТЬ"
		crimeSolved = true
		totalScore = 100
	} else {
		gameOver = true
		endingType = "ПОМИЛКА"
		wrongAccusation = true
		totalScore = 40
	}
	showEnding()
}

function showEnding() {
	outcomeShown = true
	if (gameWon == true) {
		alert(
			"КІНЕЦЬ ГРИ\n\n" +
			"ВБИВЦЮ ВИКРИТО\n" +
			"КЛЮЧ СТАВ РОКОВОЮ ПОМИЛКОЮ\n" +
			"П'ЯТЬ ХВИЛИН ТИШІ БУЛИ НЕ ІДЕАЛЬНИМИ\n" +
			"ТВІЙ РЕЗУЛЬТАТ: " + totalScore
		)
	} else {
		alert(
			"КІНЕЦЬ ГРИ\n\n" +
			"СПРАВУ НЕ РОЗКРИТО\n" +
			"ТИ ПРОПУСТИВ ВАЖЛИВІ ДЕТАЛІ\n" +
			"ТВІЙ РЕЗУЛЬТАТ: " + totalScore
		)
	}
	offerReplay()
}

function offerReplay() {
	replayAllowed = true
	let again = confirm("Хочеш зіграти ще раз?")
	if (again == true) {
		resetGame()
	} else {
		alert("Дякую за гру.")
	}
}

function resetGame() {
	gameReset = true
	gameStarted = false
	gameOver = false
	gameWon = false
	sceneStage = 0
	chapter = 1
	tensionLevel = 0
	fearLevel = 0
	suspicionLevel = 0
	warehouseKeyFound = false
	shiftPartnerConfessed = false
	startGame()
}

function showDialogueScene() {
	dialogueIndex = 0
	sceneStage = 10
	runDialogue()
}

function runDialogue() {
	let text = ""

	if (dialogueIndex == 0) {
		text =
			"СЦЕНА: НІЧ У ТОРГОВОМУ ЦЕНТРІ\n\n" +
			guardLines[0] + "\n" +
			environmentSounds[0] + "\n" +
			"Годинник: 02:00"
	}

	if (dialogueIndex == 1) {
		text =
			guardLines[1] + "\n" +
			environmentSounds[1] + "\n" +
			"Камери: працюють\n" +
			"Сигналізація: активна"
	}

	if (dialogueIndex == 2) {
		text =
			guardLines[2] + "\n" +
			environmentSounds[2] + "\n" +
			"Екран моргає"
	}

	if (dialogueIndex == 3) {
		text =
			"КАМЕРИ ГЛЮЧАТЬ\n" +
			guardLines[2] + "\n" +
			"Рація: слабкий шум"
	}

	if (dialogueIndex == 4) {
		text =
			"ТІНЬ У КОРИДОРІ\n" +
			environmentSounds[3] + "\n" +
			guardLines[3]
	}

	if (dialogueIndex == 5) {
		text =
			"ДВЕРІ СКРИПЛЯТЬ\n" +
			environmentSounds[4] + "\n" +
			"Камери: вимкнені"
	}

	if (dialogueIndex == 6) {
		text =
			"РАНОК\n" +
			"Тіло знайдено\n" +
			"Сигналізація: не спрацювала"
	}

	if (dialogueIndex == 7) {
		text =
			"СЛІДЧІ НА МІСЦІ\n" +
			investigatorLines[0] + "\n" +
			investigatorLines[1]
	}

	if (dialogueIndex == 8) {
		text =
			"ДОКАЗИ\n" +
			investigatorLines[2] + "\n" +
			"Знайдено ключ від складу"
	}

	if (dialogueIndex == 9) {
		text =
			"ДОПИТ ЗМІННИКА\n" +
			partnerLines[0] + "\n" +
			partnerLines[1]
	}

	if (dialogueIndex == 10) {
		text =
			"СУПЕРЕЧНІСТЬ\n" +
			investigatorLines[3] + "\n" +
			partnerLines[2]
	}

	if (dialogueIndex == 11) {
		text =
			"ВИКРИТТЯ\n" +
			partnerLines[3] + "\n" +
			"Камери вимкнені його доступом"
	}

	if (dialogueIndex == 12) {
		text =
			"ЗІЗНАННЯ\n" +
			partnerLines[4] + "\n" +
			"П'ять хвилин тиші"
	}

	if (dialogueIndex >= 13) {
		finalPhase()
		return
	}

	let choice = promptWithCheck(
		text +
		"\n\nКОНТЕКСТНЕ МЕНЮ\n" +
		"1 - Продовжити\n" +
		"2 - Переглянути докази\n" +
		"3 - Статус розслідування\n" +
		"4 - Швидкий перехід"
	)

	handleDialogueChoice(choice)
}

function handleDialogueChoice(choice) {
	if (choice == "1") {
		dialogueIndex = dialogueIndex + 1
		runDialogue()
	}

	if (choice == "2") {
		showEvidenceMenu()
	}

	if (choice == "3") {
		showInvestigationStatus()
	}

	if (choice == "4") {
		if (shortcutEnabled == true) {
			fastForwardStory()
		} else {
			alert("Швидке проходження недоступне")
			runDialogue()
		}
	}
}

function showEvidenceMenu() {
	let list = "ЗІБРАНІ ДОКАЗИ:\n"

	if (warehouseKeyFound == true) {
		list = list + "- Ключ від складу\n"
	} else {
		list = list + "- Немає ключа\n"
	}

	if (cameraClueValid == true) {
		list = list + "- Логи камер\n"
	} else {
		list = list + "- Логи камер відсутні\n"
	}

	if (footprintsFound == true) {
		list = list + "- Сліди у коридорі\n"
	}

	alert(list)
	runDialogue()
}

function showInvestigationStatus() {
	let status =
		"СТАТУС СПРАВИ\n\n" +
		"Тиск на підозрюваного: " + interrogationPressure + "\n" +
		"Зібрано доказів: " + evidenceCollected + "\n" +
		"Підозра: " + suspicionLevel + "\n" +
		"Довіра слідчого: " + investigatorTrust

	alert(status)
	runDialogue()
}

function fastForwardStory() {
	dialogueIndex = 12
	alert("ШВИДКИЙ ПЕРЕХІД ДО КУЛЬМІНАЦІЇ")
	runDialogue()
}

function playCharacterLines() {
	let line = ""

	if (npcMoodGuard > 40) {
		line = guardLines[1]
	} else {
		line = guardLines[4]
	}

	alert("ОХОРОНЕЦЬ: " + line)
}

function playInvestigatorLine() {
	let line = ""

	if (investigatorTrust > 50) {
		line = investigatorLines[0]
	} else {
		line = investigatorLines[4]
	}

	alert("СЛІДЧИЙ: " + line)
}

function playPartnerLine() {
	let line = ""

	if (shiftPartnerSuspicious == true) {
		line = partnerLines[2]
	} else {
		line = partnerLines[1]
	}

	alert("ЗМІННИК: " + line)
}

function sceneTransition() {
	alert("СЦЕНА ЗМІНЮЄТЬСЯ...")
}

function showTension() {
	tensionLevel = tensionLevel + 5
	alert("НАПРУГА ЗРОСТАЄ: " + tensionLevel)
}

function showSilence() {
	alert("ТИША СТАЄ ВАЖЧОЮ")
}

function triggerGlitchEffect() {
	systemGlitch = true
	alert("ЕКРАН СПОТВОРЮЄТЬСЯ")
}

function revealClue() {
	if (randomEvent % 2 == 0) {
		clues.push("Незвичний доступ до камер")
		cameraClueValid = true
		alert("ВИЯВЛЕНО НОВИЙ ДОКАЗ")
	} else {
		alert("Нічого нового не знайдено")
	}
	runDialogue()
}

function main() {
	alert("ЗАПУСК ГРИ...")
	startGame()
}

function gameLoop() {
	if (gameOver == true) {
		return
	}

	if (gameStarted == false) {
		startGame()
		return
	}

	if (chapter == 1 && sceneStage == 0) {
		showDialogueScene()
		return
	}

	if (chapter == 1 && sceneStage > 0 && nightEnded == false) {
		nightSequence()
		return
	}

	if (chapter == 2 && investigationStarted == true) {
		investigationSequence()
		return
	}

	if (chapter == 3) {
		finalSequence()
		return
	}
}

function nightSequence() {
	if (sceneStage == 1) {
		showCorridorScene()
	}

	if (sceneStage == 2) {
		encounterShadow()
	}

	if (sceneStage == 3) {
		warehouseDoorEvent()
	}

	if (nightEnded == true) {
		morningPhase()
	}
}

function investigationSequence() {
	if (shiftPartnerInterrogated == false) {
		interrogatePartner()
		return
	}

	if (shiftPartnerConfessed == false) {
		continueInterrogation()
		return
	}

	finalPhase()
}

function finalSequence() {
	if (outcomeCalculated == false) {
		calculateOutcome()
		return
	}

	if (outcomeShown == false) {
		showEnding()
		return
	}
}

function tickTimer() {
	if (timerRunning == true) {
		timerTick = timerTick + 1
		totalMinutesPassed = totalMinutesPassed + 1

		if (totalMinutesPassed >= 5 && camerasOffline == true) {
			alert("МИНУЛО П'ЯТЬ ХВИЛИН ТИШІ")
		}

		if (totalMinutesPassed >= 180) {
			nightEnded = true
		}
	}
}

function updateTension() {
	if (camerasOffline == true) {
		tensionLevel = tensionLevel + 1
	}

	if (shadowSeen == true) {
		tensionLevel = tensionLevel + 2
	}

	if (tensionLevel > 50) {
		fearLevel = fearLevel + 1
	}
}

function checkFailureConditions() {
	if (fearLevel > 80) {
		gameOver = true
		alert("ТИ ПІДДАВСЯ ПАНІЦІ")
		showEnding()
	}
}

function checkWinConditions() {
	if (warehouseKeyFound == true && shiftPartnerConfessed == true) {
		gameWon = true
		crimeSolved = true
	}
}

function autoSave() {
	if (chapter == 1) {
		currentSave = "night"
	}

	if (chapter == 2) {
		currentSave = "investigation"
	}

	if (chapter == 3) {
		currentSave = "final"
	}
}

function quickPass() {
	if (fastMode == true) {
		shortcutUsed = true
		dialogueIndex = 12
		sceneStage = 3
		warehouseKeyFound = true
		morningPhase()
	}
}

function randomNightEvent() {
	randomEvent = Math.floor(Math.random() * 10)

	if (randomEvent < 3) {
		alert("ДАЛЕКИЙ ШУМ У КОРИДОРІ")
	}

	if (randomEvent >= 3 && randomEvent < 6) {
		alert("ЛАМПА БЛИМАЄ")
	}

	if (randomEvent >= 6) {
		alert("ТИША ПОСИЛЮЄТЬСЯ")
	}
}

function updateClues() {
	if (warehouseKeyFound == true) {
		keyClueValid = true
	}

	if (camerasOffline == true) {
		cameraClueValid = true
	}

	if (totalMinutesPassed == 5) {
		timelineClueValid = true
	}
}

function checkContradictionsLoop() {
	if (interrogationPressure > 30) {
		contradictionFound = true
	}

	if (contradictionFound == true && warehouseKeyFound == true) {
		forceConfession()
	}
}

function statusUpdate() {
	alert(
		"СТАТУС\n\n" +
		"Глава: " + chapter + "\n" +
		"Напруга: " + tensionLevel + "\n" +
		"Підозра: " + suspicionLevel + "\n" +
		"Докази: " + evidenceCollected
	)
}

function startSequence() {
	main()
	setInterval(tickTimer, 1000)
}

startSequence()

function extendedNightStart() {
	sceneStage = 5
	alert("НІЧ ПРОДОВЖУЄТЬСЯ. НАПРУГА ЗРОСТАЄ.")
	ambientNightLoop()
}

function ambientNightLoop() {
	for (let i = 0; i < 3; i = i + 1) {
		randomNightEvent()
	}
	shadowWhisperEvent()
}

function shadowWhisperEvent() {
	alert("ТИ ЧУЄШ ШЕПІТ У КОРИДОРІ")
	playerChoice = promptWithCheck(
		"ОБЕРИ ДІЮ:\n" +
		"1 - Прислухатись\n" +
		"2 - Увімкнути ліхтар\n" +
		"3 - Ігнорувати"
	)
	handleWhisperChoice(playerChoice)
}

function handleWhisperChoice(choice) {
	if (choice == "1") {
		listenCloser()
	}
	if (choice == "2") {
		turnFlashlightOn()
	}
	if (choice == "3") {
		ignoreWhisper()
	}
}

function listenCloser() {
	tensionLevel = tensionLevel + 10
	alert("ШЕПІТ СТАЄ ЧІТКІШИМ")
	if (fearLevel > 30) {
		panicEffect()
	} else {
		corridorDeepEvent()
	}
}

function turnFlashlightOn() {
	flashlightOn = true
	flashlightBattery = flashlightBattery - 10
	alert("ЛІХТАР УВІМКНЕНО")
	corridorDeepEvent()
}

function ignoreWhisper() {
	alert("ТИ РОБИШ ВИГЛЯД, ЩО НІЧОГО НЕ ЧУЄШ")
	tensionLevel = tensionLevel + 5
	corridorDeepEvent()
}

function panicEffect() {
	fearLevel = fearLevel + 20
	alert("ПАНІКА НАРОСТАЄ")
	checkFailureConditions()
	corridorDeepEvent()
}

function corridorDeepEvent() {
	alert("ТИ ПРОСУВАЄШСЯ ДАЛІ КОРИДОРОМ")
	playerChoice = promptWithCheck(
		"ПЕРЕД ТОБОЮ РОЗВИЛКА\n" +
		"1 - Ліворуч до складу\n" +
		"2 - Праворуч до запасного виходу\n" +
		"3 - Назад у кімнату"
	)
	handleCorridorDeepChoice(playerChoice)
}

function handleCorridorDeepChoice(choice) {
	if (choice == "1") {
		approachWarehouse()
	}
	if (choice == "2") {
		emergencyExitPath()
	}
	if (choice == "3") {
		retreatToRoom()
	}
}

function emergencyExitPath() {
	emergencyExitUsed = true
	alert("ТИ НАБЛИЖАЄШСЯ ДО ЗАПАСНОГО ВИХОДУ")
	if (corridorDark == true) {
		alert("СВІТЛО ТУТ МАЙЖЕ ВІДСУТНЄ")
	}
	emergencyDoorEvent()
}

function emergencyDoorEvent() {
	playerChoice = promptWithCheck(
		"БІЛЯ ЗАПАСНОГО ВИХОДУ\n" +
		"1 - Відчинити двері\n" +
		"2 - Повернутися\n" +
		"3 - Оглянути підлогу"
	)
	handleEmergencyChoice(playerChoice)
}

function handleEmergencyChoice(choice) {
	if (choice == "1") {
		openEmergencyDoor()
	}
	if (choice == "2") {
		retreatToRoom()
	}
	if (choice == "3") {
		inspectFloor()
	}
}

function openEmergencyDoor() {
	if (roomDoorLocked == true) {
		alert("ДВЕРІ ЗАМКНЕНІ")
		retreatToRoom()
	} else {
		alert("ТИ ВІДЧИНЯЄШ ДВЕРІ")
		nightEscape()
	}
}

function inspectFloor() {
	footprintsFound = true
	clues.push("Сліди взуття біля виходу")
	evidenceCollected = evidenceCollected + 1
	alert("ТИ ЗНАХОДИШ СЛІДИ НА ПІДЛОЗІ")
	retreatToRoom()
}

function nightEscape() {
	alert("ТИ ОПИНЯЄШСЯ НАДВОРІ")
	rainOutside = true
	alert("ЙДЕ ДОЩ")
	nightEnded = true
	morningPhase()
}

function warehouseExtendedScene() {
	alert("ТИ ПОВЕРТАЄШСЯ ДО СКЛАДУ")
	if (warehouseLightsOn == false) {
		alert("У СКЛАДІ ТЕМНО")
	}
	playerChoice = promptWithCheck(
		"ВСЕРЕДИНІ СКЛАДУ\n" +
		"1 - Увімкнути світло\n" +
		"2 - Оглянути коробки\n" +
		"3 - Вийти"
	)
	handleWarehouseExtendedChoice(playerChoice)
}

function handleWarehouseExtendedChoice(choice) {
	if (choice == "1") {
		turnWarehouseLightsOn()
	}
	if (choice == "2") {
		searchBoxes()
	}
	if (choice == "3") {
		retreatToRoom()
	}
}

function turnWarehouseLightsOn() {
	warehouseLightsOn = true
	alert("СВІТЛО УВІМКНЕНО")
	searchBoxes()
}

function searchBoxes() {
	alert("ТИ ОГЛЯДАЄШ КОРОБКИ")
	if (warehouseKeyFound == false) {
		warehouseKeyFound = true
		clues.push("Додатковий складський ключ")
		evidenceCollected = evidenceCollected + 1
	}
	alert("ТИ ЗНАХОДИШ СЛІДИ КРАДІЖКИ")
	retreatToRoom()
}

function morningExtendedPhase() {
	alert("РАНОК НАСТАЄ ПОВНІСТЮ")
	policeArrived = true
	ambulanceArrived = true
	alert("ПОЛІЦІЯ ТА МЕДИКИ НА МІСЦІ")
	investigationNotes.push("Сліди біля запасного виходу")
	investigationNotes.push("Підозрілий доступ до камер")
	startInvestigation()
}

function extendedInterrogation() {
	playerChoice = promptWithCheck(
		"РОЗШИРЕНИЙ ДОПИТ\n" +
		"1 - Поставити технічні питання\n" +
		"2 - Згадати ніч\n" +
		"3 - Натиснути сильніше"
	)
	handleExtendedInterrogation(playerChoice)
}

function handleExtendedInterrogation(choice) {
	if (choice == "1") {
		technicalQuestion()
	}
	if (choice == "2") {
		recallNight()
	}
	if (choice == "3") {
		applyPressure()
	}
}

function technicalQuestion() {
	alert("ТИ ПИТАЄШ ПРО СИСТЕМУ КАМЕР")
	suspicionLevel = suspicionLevel + 10
	checkContradiction()
}

function recallNight() {
	alert("ТИ ПРОСИШ ЗГАДАТИ ДЕТАЛІ НОЧІ")
	investigatorTrust = investigatorTrust + 5
	checkContradiction()
}

function secretEndingCheck() {
	if (footprintsFound == true && cameraClueValid == true && warehouseKeyFound == true) {
		secretEndingAvailable = true
	}
}

function showSecretEnding() {
	if (secretEndingAvailable == true) {
		alert(
			"СЕКРЕТНИЙ ФІНАЛ\n\n" +
			"ТИ ВІДНОВИВ ПОВНУ КАРТИНУ ЗЛОЧИНУ\n" +
			"КЛЮЧ, СЛІДИ ТА ЛОГИ ЗІЙШЛИСЯ В ОДНЕ\n" +
			"СПРАВЖНЯ СПРАВЕДЛИВІСТЬ"
		)
	} else {
		showEnding()
	}
}

function finalExtendedPhase() {
	calculateOutcome()
	secretEndingCheck()
	if (secretEndingAvailable == true) {
		showSecretEnding()
	} else {
		showEnding()
	}
}

function unifiedGameFlow() {
	if (gameReset == true) {
		gameReset = false
		startGame()
		return
	}

	if (gameStarted == false) {
		startGame()
		return
	}

	if (chapter == 1) {
		if (introShown == false) {
			showDialogueScene()
			introShown = true
			return
		}

		if (sceneStage < 5) {
			gameLoop()
			return
		}

		extendedNightStart()
		return
	}

	if (chapter == 2) {
		if (investigationStarted == false) {
			morningExtendedPhase()
			return
		}

		extendedInterrogation()
		return
	}

	if (chapter == 3) {
		finalExtendedPhase()
		return
	}
}

function inventoryAdd(item) {
	if (inventoryFull == false) {
		inventory.push(item)
		if (inventory.length >= 5) {
			inventoryFull = true
		}
	}
}

function inventoryShow() {
	let text = "ІНВЕНТАР:\n"
	for (let i = 0; i < inventory.length; i = i + 1) {
		text = text + "- " + inventory[i] + "\n"
	}
	alert(text)
}

function addClueToLog(clue) {
	clues.push(clue)
	evidenceCollected = evidenceCollected + 1
	investigationNotes.push(clue)
}

function updateMood() {
	if (tensionLevel > 40) {
		npcMoodGuard = npcMoodGuard - 5
	}

	if (interrogationPressure > 30) {
		npcMoodPartner = npcMoodPartner - 10
	}

	if (investigatorTrust > 60) {
		npcMoodInvestigator = npcMoodInvestigator + 5
	}
}

function worldStateUpdate() {
	if (camerasOffline == true) {
		systemStable = false
		systemGlitch = true
	}

	if (rainOutside == true) {
		tensionLevel = tensionLevel + 1
	}

	if (warehouseVisited == true) {
		truthMeter = truthMeter + 5
	}
}

function sideEventGenerator() {
	randomEvent = Math.floor(Math.random() * 10)

	if (randomEvent == 0) {
		alert("ДАЛЕКИЙ ГУРКІТ НА ДАХУ")
		roofVisited = true
	}

	if (randomEvent == 1) {
		alert("ЛАМПА ПЕРЕГОРІЛА")
		corridorDark = true
	}

	if (randomEvent == 2) {
		alert("ХТOСЬ ПРОЙШОВ ПОВЗ КІМНАТУ")
		shadowSeen = true
	}
}

function saveGame(slot) {
	if (slot == 1) {
		saveSlot1 = "CH" + chapter + "-SC" + sceneStage
		currentSave = saveSlot1
	}
	if (slot == 2) {
		saveSlot2 = "CH" + chapter + "-SC" + sceneStage
		currentSave = saveSlot2
	}
	if (slot == 3) {
		saveSlot3 = "CH" + chapter + "-SC" + sceneStage
		currentSave = saveSlot3
	}
	alert("ГРУ ЗБЕРЕЖЕНО В СЛОТ " + slot)
}

function loadGame(slot) {
	if (slot == 1 && saveSlot1 != "") {
		currentSave = saveSlot1
		alert("ЗАВАНТАЖЕНО: " + saveSlot1)
	}
	if (slot == 2 && saveSlot2 != "") {
		currentSave = saveSlot2
		alert("ЗАВАНТАЖЕНО: " + saveSlot2)
	}
	if (slot == 3 && saveSlot3 != "") {
		currentSave = saveSlot3
		alert("ЗАВАНТАЖЕНО: " + saveSlot3)
	}
}

function pauseMenu() {
	let choice = promptWithCheck(
		"ПАУЗА\n" +
		"1 - Продовжити\n" +
		"2 - Інвентар\n" +
		"3 - Зберегти\n" +
		"4 - Вийти"
	)

	if (choice == "1") {
		unifiedGameFlow()
	}
	if (choice == "2") {
		inventoryShow()
		unifiedGameFlow()
	}
	if (choice == "3") {
		let s = promptWithCheck("Оберіть слот 1-3")
		saveGame(s)
		unifiedGameFlow()
	}
	if (choice == "4") {
		gameOver = true
		alert("ВИХІД З ГРИ")
	}
}

function achievementCheck() {
	if (warehouseKeyFound == true && footprintsFound == true) {
		achievement1 = true
	}

	if (shiftPartnerConfessed == true && interrogationPressure > 40) {
		achievement2 = true
	}

	if (secretEndingAvailable == true) {
		achievement3 = true
	}
}

function showAchievements() {
	let text = "ДОСЯГНЕННЯ:\n"

	if (achievement1 == true) {
		text = text + "- Детектив-початківець\n"
	}

	if (achievement2 == true) {
		text = text + "- Майстер допиту\n"
	}

	if (achievement3 == true) {
		text = text + "- Істина в темряві\n"
	}

	alert(text)
}

function tensionPulse() {
	if (tensionLevel > 30) {
		alert("НАПРУГА ПУЛЬСУЄ В ПОВІТРІ")
	}
}

function breathingCheck() {
	if (guardBreathing == false) {
		alert("ТИША СТАЄ МОТОРОШНОЮ")
	}
}

function evidenceWeightUpdate() {
	evidenceWeight = evidenceCollected * 10
}

function verdictUpdate() {
	if (crimeSolved == true) {
		finalVerdict = "СПРАВУ ЗАКРИТО"
	} else {
		finalVerdict = "СПРАВА ВІДКРИТА"
	}
}

function finalReport() {
	evidenceWeightUpdate()
	verdictUpdate()

	alert(
		"ФІНАЛЬНИЙ ЗВІТ\n\n" +
		"Докази: " + evidenceCollected + "\n" +
		"Вага доказів: " + evidenceWeight + "\n" +
		"Вердикт: " + finalVerdict
	)
}

function masterLoop() {
	if (gameOver == true) {
		return
	}

	unifiedGameFlow()
	updateMood()
	worldStateUpdate()
	sideEventGenerator()
	tensionPulse()
	breathingCheck()
	achievementCheck()
}

setInterval(masterLoop, 3000)
