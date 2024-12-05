// BlockRayCastTypes
declare type BlockRayCastType = "COLLIDER" | "OUTLINE" | "VISUAL" | "FALLDAMAGE_RESETTING"
// EntityPoses
declare type EntityPlayerPose = "FALL_FLYING" | "SLEEPING" | "SWIMMING" | "SPIN_ATTACK" | "CROUCHING"
declare type EntityGoatPose = "LONG_JUMPING"
declare type EntityFrogPose = "CROAKING" | "USING_TONGUE"
declare type EntityCamelPose = "SITTING"
declare type EntityWardenPose = "ROARING" | "SNIFFING" | "EMERGING" | "DIGGING"
declare type EntityBreezePose = "INHALING" | "SHOOTING" | "SLIDING"
declare type EntityMobsPose = EntityGoatPose | EntityFrogPose | EntityCamelPose | EntityWardenPose | EntityBreezePose | "DYING"
declare type EntityPose = EntityPlayerPose | EntityMobsPose | "STANDING"
// FluidRaycastTypes
declare type FluidRaycastType = "NONE" | "SOURCE_ONLY" | "ANY" | "WATER"
// HeightmapTypes
declare type HeightmapType = "WOURLD_SURFACE_WG" | "WORLD_SURFACE" | "OCEAN_FLOOR_WG" | "OCEAN_FLOOR" | "MOTION_BLOCKING" | "MOTION_BLOCKING_NO_LEAVES"
// ItemDisplayModes
declare type ItemDisplayTaskMode = "GUI" | "GROUND" | "FIXED" | "NONE"
declare type ItemDisplayMode = "FIRST_PERSON_RIGHT_HAND" | "FIRST_PERSON_LEFT_HAND" | "THIRD_PERSON_RIGHT_HAND" | "THIRD_PERSON_LEFT_HAND" | "HEAD" | ItemDisplayTaskMode
// KeyIDs
declare type KeyID = "key.jump" | "key.sneak" | "key.sprint" | "key.left" | "key.right" | "key.back" | "key.forward" | "key.attack" | "key.pickItem" | "key.use" | "key.drop" | `key.hotbar.${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | "key.inventory" | "key.swapOffhand" | "key.loadToolbarActivator" | "key.saveToolbarActivator" | "key.playerlist" | "key.chat" | "key.command" | "key.socialInteractions" | "key.advancements" | "key.spectatorOutlines" | "key.screenshot" | "key.smoothCamera" | "key.fullscreen" | "key.togglePerspective" | "figura.config.action_wheel" | "figura.config.panic_button" | "figura.config.popup_button" | "figura.config.reload_button" | "figura.config.wardrobe_button"
// KeybindsList
declare type KeybindList = "key.keyboard.unknown" | "key.mouse.left" | "key.mouse.right" | "key.mouse.middle" | "key.mouse.4" | "key.mouse.5" | "key.mouse.6" | "key.mouse.7" | "key.mouse.8" | "key.keyboard.0" | "key.keyboard.1" | "key.keyboard.2" | "key.keyboard.3" | "key.keyboard.4" | "key.keyboard.5" | "key.keyboard.6" | "key.keyboard.7" | "key.keyboard.8" | "key.keyboard.9" | "key.keyboard.a" | "key.keyboard.b" | "key.keyboard.c" | "key.keyboard.d" | "key.keyboard.e" | "key.keyboard.f" | "key.keyboard.g" | "key.keyboard.h" | "key.keyboard.i" | "key.keyboard.j" | "key.keyboard.k" | "key.keyboard.l" | "key.keyboard.m" | "key.keyboard.n" | "key.keyboard.o" | "key.keyboard.p" | "key.keyboard.q" | "key.keyboard.r" | "key.keyboard.s" | "key.keyboard.t" | "key.keyboard.u" | "key.keyboard.v" | "key.keyboard.w" | "key.keyboard.x" | "key.keyboard.y" | "key.keyboard.z" | "key.keyboard.f1" | "key.keyboard.f2" | "key.keyboard.f3" | "key.keyboard.f4" | "key.keyboard.f5" | "key.keyboard.f6" | "key.keyboard.f7" | "key.keyboard.f8" | "key.keyboard.f9" | "key.keyboard.f10" | "key.keyboard.f11" | "key.keyboard.f12" | "key.keyboard.f13" | "key.keyboard.f14" | "key.keyboard.f15" | "key.keyboard.f16" | "key.keyboard.f17" | "key.keyboard.f18" | "key.keyboard.f19" | "key.keyboard.f20" | "key.keyboard.f21" | "key.keyboard.f22" | "key.keyboard.f23" | "key.keyboard.f24" | "key.keyboard.f25" | "key.keyboard.num.lock" | "key.keyboard.keypad.0" | "key.keyboard.keypad.1" | "key.keyboard.keypad.2" | "key.keyboard.keypad.3" | "key.keyboard.keypad.4" | "key.keyboard.keypad.5" | "key.keyboard.keypad.6" | "key.keyboard.keypad.7" | "key.keyboard.keypad.8" | "key.keyboard.keypad.9" | "key.keyboard.keypad.add" | "key.keyboard.keypad.decimal" | "key.keyboard.keypad.enter" | "key.keyboard.keypad.equal" | "key.keyboard.keypad.multiply" | "key.keyboard.keypad.divide" | "key.keyboard.keypad.subtract" | "key.keyboard.down" | "key.keyboard.left" | "key.keyboard.right" | "key.keyboard.up" | "key.keyboard.apostrophe" | "key.keyboard.backslash" | "key.keyboard.comma" | "key.keyboard.equal" | "key.keyboard.grave.accent" | "key.keyboard.left.bracket" | "key.keyboard.minus" | "key.keyboard.period" | "key.keyboard.right.bracket" | "key.keyboard.semicolon" | "key.keyboard.slash" | "key.keyboard.space" | "key.keyboard.tab" | "key.keyboard.left.alt" | "key.keyboard.left.control" | "key.keyboard.left.shift" | "key.keyboard.left.win" | "key.keyboard.right.alt" | "key.keyboard.right.control" | "key.keyboard.right.shift" | "key.keyboard.right.win" | "key.keyboard.enter" | "key.keyboard.escape" | "key.keyboard.backspace" | "key.keyboard.delete" | "key.keyboard.end" | "key.keyboard.home" | "key.keyboard.insert" | "key.keyboard.page.down" | "key.keyboard.page.up" | "key.keyboard.caps.lock" | "key.keyboard.pause" | "key.keyboard.scroll.lock" | "key.keyboard.menu" | "key.keyboard.print.screen" | "key.keyboard.world.1" | "key.keyboard.world.2"
// LoopModes
declare type LoopMode = "LOOP" | "ONCE" | "HOLD"
// ParentTypes
declare type ParentType = "Head" | "Body" | "RightArm" | "LeftArm" | "RightLeg" | "LeftLeg" | "RightElytra" | "LeftElytra" | "Cape" | "World" | "Hud" | "Camera" | "Skull" | "Portrait" | "Arrow" | "Trident" | "Item" | "RightItemPivot" | "LeftItemPivot" | "RightElytraPivot" | "LeftElytraPivot" | "RightParrotPivot" | "LeftParrotPivot" | "RightSpyglassPivot" | "LeftSpyglassPivot" | "HelmetPivot" | "ChestplatePivot" | "LeftShoulderPivot" | "RightShoulderPivot" | "BeltPivot" | "LeggingsPivot" | "LeftLeggingPivot" | "RightLeggingPivot" | "LeftBootPivot" | "RightBootPivot" | "HelmetItemPivot"
// PlayStates
declare type PlayState = "STOPPED" | "PAUSED" | "PLAYING"
// PlayerModelParts
declare type PlayerModelPart = "CAPE" | "JACKET" | "LEFT_SLEEVE" | "RIGHT_SLEEVE" | "LEFT_PANTS" | "RIGHT_PANTS" | "HAT"
// PostEffects
declare type PostEffect = "creeper" | "spider" | "notch" | "fxaa" | "art" | "bumpy" | "blobs2" | "pencil" | "color_convolve" | "deconverge" | "flip" | "invert" | "ntsc" | "outline" | "phosphor" | "scan_pincushion" | "sobel" | "bits" | "desaturate" | "green" | "blur" | "wobble" | "blobs" | "antialias"
// Registries
declare type Registries = "command_argument_type" | "item" | "block_entity_type" | "custom_stat" | "worldgen/foliage_placer_type" | "stat_type" | "worldgen/material_rule" | "worldgen/structure_type" | "attribute" | "position_source_type" | "height_provider_type" | "rule_block_entity_modifier" | "worldgen/density_function_type" | "fluid" | "loot_condition_type" | "worldgen/structure_pool_element" | "activity" | "recipe_serializer" | "frog_variant" | "banner_pattern" | "instrument" | "decorated_pot_patterns" | "worldgen/feature_size_type" | "point_of_interest_type" | "mob_effect" | "loot_pool_entry_type" | "worldgen/block_state_provider_type" | "worldgen/chunk_generator" | "float_provider_type" | "chunk_status" | "enchantment" | "loot_function_type" | "worldgen/structure_processor" | "loot_score_provider_type" | "worldgen/tree_decorator_type" | "schedule" | "worldgen/material_condition" | "entity_type" | "villager_profession" | "potion" | "recipe_type" | "int_provider_type" | "worldgen/feature" | "cat_variant" | "pos_rule_test" | "worldgen/structure_placement" | "tracked_data_handlers" | "loot_nbt_provider_type" | "menu" | "worldgen/trunk_placer_type" | "creative_mode_tab" | "worldgen/placement_modifier_type" | "worldgen/carver" | "loot_number_provider_type" | "worldgen/structure_piece" | "sound_event" | "particle_type" | "game_event" | "worldgen/biome_source" | "worldgen/root_placer_type" | "villager_type" | "painting_variant" | "block_predicate_type" | "block" | "sensor_type" | "rule_test" | "memory_module_type"
// RenderModes
declare type RenderMode = "FIGURA_GUI" | "PAPERDOLL" | "MINECRAFT_GUI" | "FIRST_PERSON" | "FIRST_PERSON_WORLD" | "RENDER" | "WORLD" | "OTHER"
// RenderTypes
declare type RenderType = "NONE" | "CUTOUT" | "CUTOUT_CULL" | "TRANSLUCENT" | "TRANSLUCENT_CULL" | "EMISSIVE" | "EMISSIVE_SOLID" | "CUTOUT_EMISSIVE_SOLID" | "EYES" | "END_PORTAL" | "END_GATEWAY" | "TEXTURED_PORTAL" | "GLINT" | "GLINT2" | "TEXTURED_GLINT" | "LINES" | "LINES_STRIP" | "SOLID" | "BLURRY"
// StringEncodings
declare type StringEncoding = "utf8" | "utf_8" | "utf16" | "utf_16" | "utf16be" | "utf_16_be" | "utf16le" | "utf_16_le" | "ascii" | "iso88591" | "iso_8859_1"
// TextureTypes
declare type TextureType = "SKIN" | "CAPE" | "ELYTRA" | "RESOURCE" | "PRIMARY" | "SECONDARY" | "SPECULAR" | "NORMAL" | "CUSTOM"
// UseActions
declare type UseAction = "NONE" | "EAT" | "DRINK" | "BLOCK" | "BOW" | "SPEAR" | "CROSSBOW" | "SPYGLASS" | "TOOT_HORN" | "BRUSH"
// Gamemode
declare type Gamemode = "SURVIVAL" | "CREATIVE" | "ADVENTURE" | "SPECTATOR"
// EntityCategory
declare type EntityCategory = "ARTHROPOD" | "UNDEAD" | "WATER" | "ILLAGER" | "UNDEFINED"
// ModelType
declare type ModelType = "SLIM" | "DEFAULT"
// ActiveHand
declare type ActiveHand = "OFF_HAND" | "MAIN_HAND"
// VanillaPlayerGroups
declare type VanillaPlayerGroup = "ALL" | "PLAYER" | "OUTER_LAYER" | "INNER_LAYER" | "CAPE" | "ARMOR" | "HELMET" | "CHESTPLATE" | "LEGGINGS" | "BOOTS" | "ELYTRA" | "HELD_ITEMS" | "PARROTS"
// VanillaPlayerParts
declare type VanillaPlayerPart = "HEAD" | "BODY" | "LEFT_ARM" | "RIGHT_ARM" | "LEFT_LEG" | "RIGHT_LEG" | "HAT" | "JACKET" | "LEFT_SLEEVE" | "RIGHT_SLEEVE" | "LEFT_PANTS" | "RIGHT_PANTS" | "CAPE_MODEL" | "FAKE_CAPE" | "HELMET_ITEM" | "HELMET_HEAD" | "HELMET_HAT" | "CHESTPLATE_BODY" | "CHESTPLATE_LEFT_ARM" | "CHESTPLATE_RIGHT_ARM" | "LEGGINGS_BODY" | "LEGGINGS_LEFT_LEG" | "LEGGINGS_RIGHT_LEG" | "BOOTS_LEFT_LEG" | "BOOTS_RIGHT_LEG" | "LEFT_ELYTRA" | "RIGHT_ELYTRA" | "LEFT_ITEM" | "RIGHT_ITEM" | "LEFT_PARROT" | "RIGHT_PARROT"
// Precipitation
declare type Precipitation = "NONE" | "RAIN" | "SNOW"
// ItemStackRarity
declare type ItemStackRarity = "COMMON" | "UNCOMMON" | "RARE" | "EPIC"
// SkullMode
declare type SkullMode = "LEFT_HAND" | "RIGHT_HAND" | "HEAD" | "BLOCK"
// SoundCategory
declare type SoundCategory = "AMBIENT" | "BLOCKS" | "HOSTILE" | "MASTER" | "MUSIC" | "NEUTRAL" | "PLAYERS" | "RECORDS" | "VOICE" | "WEATHER"