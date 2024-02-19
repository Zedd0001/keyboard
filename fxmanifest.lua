fx_version "bodacious"
game "gta5"
lua54 "yes"

ui_page "web-side/index.html"

shared_script "@vrp/config/General.lua"

client_scripts {
	"@vrp/config/Native.lua",
	"@vrp/lib/Utils.lua",
	"client-side/*"
}

files {
	"web-side/*",
	"web-side/**/*"
}