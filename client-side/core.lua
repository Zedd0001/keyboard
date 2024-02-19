-----------------------------------------------------------------------------------------------------------------------------------------
-- VRP
-----------------------------------------------------------------------------------------------------------------------------------------
local Tunnel = module("vrp","lib/Tunnel")
-----------------------------------------------------------------------------------------------------------------------------------------
-- CONNECTION
-----------------------------------------------------------------------------------------------------------------------------------------
Creative = {}
Tunnel.bindInterface("keyboard", Creative)
-----------------------------------------------------------------------------------------------------------------------------------------
-- VARIABLES
-----------------------------------------------------------------------------------------------------------------------------------------
local Status = ""
local Progress = false
-----------------------------------------------------------------------------------------------------------------------------------------
-- SUCESS
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("success", function(Data, Callback)
	SetNuiFocus(false, false)
	Status = Data["data"]
	Progress = false

	Callback("Ok")
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- FAILURE
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("failure", function(Data, Callback)
	SetNuiFocus(false, false)
	Status = "undefined"
	Progress = false

	Callback("Ok")
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- KEYBOARD
-----------------------------------------------------------------------------------------------------------------------------------------
function Keyboard(Data)
	if Progress then return end

	Progress = true
	SetNuiFocus(true, true)
	SendNUIMessage({ name = "Open", payload = Data })

	while Progress do
		Wait(0)
	end

	if Status ~= "undefined" then
		return Status
	end

	return false
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- PASSWORD
-----------------------------------------------------------------------------------------------------------------------------------------
function Password(First)
	local Array = Keyboard({
		title = "Formulário",
		subtitle = "Preencha os campos abaixo",
		rows = {
			{
				id = 1,
				mode = "password",
				placeholder = First,
				value = ""
			}
		}
	})

	if Array then
		if not Array[1]["input"] then
			return false
		end

		return { Array[1]["input"] }
	end

	return false
end
function Creative.Password(First)
	return Password(First)
end
Creative.keyWord = Creative.Password
-----------------------------------------------------------------------------------------------------------------------------------------
-- PRIMARY
-----------------------------------------------------------------------------------------------------------------------------------------
function Primary(First)
	local Array = Keyboard({
		title = "Formulário",
		subtitle = "Preencha os campos abaixo",
		rows = {
			{
				id = 1,
				mode = "text",
				placeholder = First,
				value = ""
			}
		}
	})

	if Array then
		if not Array[1]["input"] then
			return false
		end

		return { Array[1]["input"] }
	end

	return false
end
function Creative.Primary(First)
	return Primary(First)
end
Creative.keySingle = Creative.Primary
exports("Primary",Primary)
exports("keySingle",Primary)

function PrimaryCustom(Data)
	local Array = Keyboard({
		title = Data.Title or "",
		subtitle = Data.Subtitle or "",
		rows = {
			{
				id = 1,
				mode = Data["1"].Mode or "text",
				placeholder = Data["1"].PlaceHolder or "",
				value = Data["1"].Value or ""
			}
		}
	})

	if Array then
		if not Array[1]["input"] then
			return false
		end

		return { Array[1]["input"] }
	end

	return false
end

function Creative.PrimaryCustom(Data)
	return PrimaryCustom(Data)
end
Creative.keySingleCustom = Creative.PrimaryCustom
exports("PrimaryCustom",PrimaryCustom)
exports("keySingleCustom",PrimaryCustom)
-----------------------------------------------------------------------------------------------------------------------------------------
-- SECONDARY
-----------------------------------------------------------------------------------------------------------------------------------------
function Secondary(First, Second)
	local Array = Keyboard({
		title = "Formulário",
		subtitle = "Preencha os campos abaixo",
		rows = {
			{
				id = 1,
				mode = "text",
				placeholder = First,
				value = ""
			}, {
				id = 2,
				mode = "text",
				placeholder = Second,
				value = ""
			}
		}
	})

	if Array then
		if not Array[1]["input"] or not Array[2]["input"] then
			return false
		end

		return { Array[1]["input"], Array[2]["input"] }
	end

	return false
end
function Creative.Secondary(First, Second)
	return Secondary(First, Second)
end
Creative.keyDouble = Creative.Secondary
exports("Secondary",Secondary)
exports("keyDouble",Secondary)

function SecondaryCustom(Data)
	local Array = Keyboard({
		title = Data.Title or "",
		subtitle = Data.Subtitle or "",
		rows = {
			{
				id = 1,
				mode = Data["1"].Mode or "text",
				placeholder = Data["1"].PlaceHolder or "",
				value = Data["1"].Value or ""
			}, {
				id = 2,
				mode = Data["2"].Mode or "text",
				placeholder = Data["2"].PlaceHolder or "",
				value = Data["2"].Value or ""
			}
		}
	})

	if Array then
		if not Array[1]["input"] or not Array[2]["input"] then
			return false
		end

		return { Array[1]["input"], Array[2]["input"] }
	end

	return false
end

function Creative.SecondaryCustom(Data)
	return SecondaryCustom(Data)
end
Creative.keyDoubleCustom = Creative.SecondaryCustom
exports("SecondaryCustom",SecondaryCustom)
exports("keyDoubleCustom",SecondaryCustom)
-----------------------------------------------------------------------------------------------------------------------------------------
-- TERTIARY
-----------------------------------------------------------------------------------------------------------------------------------------
function Tertiary(First, Second, Third)
	local Array = Keyboard({
		title = "Formulário",
		subtitle = "Preencha os campos abaixo",
		rows = {
			{
				id = 1,
				mode = "text",
				placeholder = First,
				value = ""
			}, {
				id = 2,
				mode = "text",
				placeholder = Second,
				value = ""
			}, {
				id = 3,
				mode = "text",
				placeholder = Third,
				value = ""
			}
		}
	})

	if Array then
		if not Array[1]["input"] or not Array[2]["input"] or not Array[3]["input"] then
			return false
		end

		return { Array[1]["input"], Array[2]["input"], Array[3]["input"] }
	end

	return false
end

function Creative.Tertiary(First, Second, Third)
	return Tertiary(First, Second, Third)
end
Creative.keyTriple = Creative.Tertiary
exports("Tertiary",Tertiary)
exports("keyTriple",Tertiary)

function TertiaryCustom(Data)
	local Array = Keyboard({
		title = Data.Title or "",
		subtitle = Data.Subtitle or "",
		rows = {
			{
				id = 1,
				mode = Data["1"].Mode or "text",
				placeholder = Data["1"].PlaceHolder or "",
				value = Data["1"].Value or ""
			}, {
				id = 2,
				mode = Data["2"].Mode or "text",
				placeholder = Data["2"].PlaceHolder or "",
				value = Data["2"].Value or ""
			}, {
				id = 3,
				mode = Data["3"].Mode or "text",
				placeholder = Data["3"].PlaceHolder or "",
				value = Data["3"].Value or ""
			}
		}
	})

	if Array then
		if not Array[1]["input"] or not Array[2]["input"] or not Array[3]["input"] then
			return false
		end

		return { Array[1]["input"], Array[2]["input"], Array[3]["input"] }
	end

	return false
end

function Creative.TertiaryCustom(Data)
	return TertiaryCustom(Data)
end
Creative.keyTripleCustom = Creative.TertiaryCustom

exports("TertiaryCustom",TertiaryCustom)
exports("keyTripleCustom",TertiaryCustom)
-----------------------------------------------------------------------------------------------------------------------------------------
-- QUATERNARY
-----------------------------------------------------------------------------------------------------------------------------------------
function Quaternary(First, Second, Third, Fourth)
	local Array = Keyboard({
		title = "Formulário",
		subtitle = "Preencha os campos abaixo",
		rows = {
			{
				id = 1,
				mode = "text",
				placeholder = First,
				value = ""
			}, {
				id = 2,
				mode = "area",
				placeholder = Second,
				value = ""
			}, {
				id = 3,
				mode = "text",
				placeholder = Third,
				value = ""
			}, {
				id = 4,
				mode = "text",
				placeholder = Fourth,
				value = ""
			}
			
		}
	})

	if Array then
		if not Array[1]["input"] or not Array[2]["input"] or not Array[3]["input"] or not Array[4]["input"] then
			return false
		end

		return { Array[1]["input"], Array[2]["input"], Array[3]["input"], Array[4]["input"] }
	end

	return false
end

function Creative.Quadruple(First, Second, Third, Fourth)
	return Quaternary(First, Second, Third, Fourth)
end
Creative.keyFourth = Creative.Quadruple
exports("Quaternary",Quaternary)
exports("keyFourth",Quaternary)

function QuaternaryCustom(Data)
	local Array = Keyboard({
		title = Data.Title or "",
		subtitle = Data.Subtitle or "",
		rows = {
			{
				id = 1,
				mode = Data["1"].Mode or "text",
				placeholder = Data["1"].PlaceHolder or "",
				value = Data["1"].Value or ""
			}, {
				id = 2,
				mode = Data["2"].Mode or "text",
				placeholder = Data["2"].PlaceHolder or "",
				value = Data["2"].Value or ""
			}, {
				id = 3,
				mode = Data["3"].Mode or "text",
				placeholder = Data["3"].PlaceHolder or "",
				value = Data["3"].Value or ""
			}, {
				id = 4,
				mode = Data["4"].Mode or "text",
				placeholder = Data["4"].PlaceHolder or "",
				value = Data["4"].Value or ""
			}
		}
	})

	if Array then
		if not Array[1]["input"] or not Array[2]["input"] or not Array[3]["input"] or not Array[4]["input"] then
			return false
		end

		return { Array[1]["input"], Array[2]["input"], Array[3]["input"], Array[4]["input"] }
	end

	return false
end

function Creative.QuadrupleCustom(Data)
	return QuaternaryCustom(Data)
end
Creative.QuaternaryCustom = Creative.QuadrupleCustom
Creative.keyFourthCustom = Creative.QuadrupleCustom
exports("QuaternaryCustom",QuaternaryCustom)
exports("keyFourthCustom",QuaternaryCustom)
-----------------------------------------------------------------------------------------------------------------------------------------
-- COPY
-----------------------------------------------------------------------------------------------------------------------------------------
function Copy(First, Second)
	local Array = Keyboard({
		title = "Formulário",
		subtitle = "Preencha os campos abaixo",
		rows = {
			{
				id = 0,
				mode = "area",
				placeholder = First,
				value = Second
			}
		}
	})

	return true
end
function Creative.Copy(First, Message)
	return Copy(First, Message)
end
Creative.keyCopy = Creative.Copy
exports("Copy",Copy)
exports("keyCopy",Copy)


function CopyCustom(Data)
	local Array = Keyboard({
		title = Data.Title or "Formulário",
		subtitle = Data.Subtitle or "Preencha os campos abaixo",
		rows = {
			{
				id = 0,
				mode = Data.Mode or "area",
				placeholder = Data.PlaceHolder or "",
				value = Data.Value or ""
			}
		}
	})

	return true
end
function Creative.CopyCustom(Data)
	return CopyCustom(Data)
end
Creative.keyCopyCustom = Creative.CopyCustom
exports("CopyCustom",CopyCustom)
exports("keyCopyCustom",CopyCustom)
-----------------------------------------------------------------------------------------------------------------------------------------
-- AREA
-----------------------------------------------------------------------------------------------------------------------------------------
function Area(First)
	local Array = Keyboard({
		title = "Formulário",
		subtitle = "Preencha os campos abaixo",
		rows = {
			{
				id = 1,
				mode = "area",
				placeholder = First,
				value = ""
			}
		}
	})

	if Array then
		if not Array[1]["input"] then
			return false
		end

		return { Array[1]["input"] }
	end

	return false
end
function Creative.Area(First)
	return Area(First)
end
Creative.keyArea = Creative.Area


function AreaCustom(Data)
	local Array = Keyboard({
		title = Data.Title or "Formulário",
		subtitle = Data.Subtitle or "Preencha os campos abaixo",
		rows = {
			{
				id = 1,
				mode = Data.Mode or "area",
				placeholder = Data.PlaceHolder or "",
				value = Data.Value or ""
			}
		}
	})

	if Array then
		if not Array[1]["input"] then
			return false
		end

		return { Array[1]["input"] }
	end

	return false
end
function Creative.AreaCustom(Data)
	return AreaCustom(Data)
end
Creative.keyAreaCustom = Creative.AreaCustom

