/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
declare enum Interrupt {
    GameDialogMessagesEditFiltersSaveOverExisting = 0,
    GameDialogMessagesEditFiltersResetConfirm = 1,
    GameMessagesContextMenuClear = 2,
    GameCannotRun = 3,
    GameConfirmationActionOnFire = 4,
    GameConfirmationDestroyOnGather = 5,
    GameConfirmationRestWithEquippedFireSource = 6,
    GameContainerNotFull = 7,
    GameDangerousStep = 8,
    GameDesalinationNoNeed = 9,
    GameExtinguishWaterStill = 10,
    GameItemMayBeDestroyedInCraft = 11,
    GameItemMayBeDestroyedOnUse = 12,
    GameItemMayCauseBurns = 13,
    GameItemsMayBeDestroyedOnUse = 14,
    GameLoadFailure = 15,
    GameLoadingAutoSaving = 16,
    GameLoadingFinalizingWorld = 17,
    GameLoadingGame = 18,
    GameLoadingGeneratingWorld = 19,
    GameLoadingLostGLContext = 20,
    GameLoadingMods = 21,
    GameLoadingMultiplayerPlayerConnecting = 22,
    GameLoadingMultiplayerSyncing = 23,
    GameLoadingQuitting = 24,
    GameLoadingReloadingWebGl = 25,
    GameLoadingResting = 26,
    GameLoadingSaving = 27,
    GameLoadingSleeping = 28,
    GameLoadingSprites = 29,
    GameLoadingTraveling = 30,
    GameLoadingTravelingMultiplayer = 31,
    GameLoadingWorld = 32,
    GameMultiplayerSynchronizing = 33,
    GameMultiplayerTravelVote = 34,
    GameNoHealingRequired = 35,
    GameNoSaveOnDeath = 36,
    GamePickUpWaterStillWithWater = 37,
    GameReleaseCreature = 38,
    GameRenameCreature = 39,
    GameRenameDoodad = 40,
    GameRenameItem = 41,
    GameReturnToTitleScreen = 42,
    GameReturnToTitleScreenChallenge = 43,
    GameSailAwayEnd = 44,
    GameSailAwayReturnable = 45,
    GameSaveFailure = 46,
    GameStartModifiers = 47,
    GameTravelConfirmation = 48,
    GameWellConvert = 49,
    MenuChangelogLoadingChangelog = 50,
    MenuCharacterCreationImportCharacterFailure = 51,
    MenuCharacterSelectionDeleteCharacter = 52,
    MenuGameEndGhostDeleteSave = 53,
    MenuGameEndWonDeleteSave = 54,
    MenuGameEndDeleteSaveDescription = 55,
    MenuGameEndReturnToTitleScreen = 56,
    MenuGameEndReturnToTitleScreenChallengeMultiplayerDescription = 57,
    MenuGameEndReturnToTitleScreenChallengeDescription = 58,
    MenuGameEndReturnToTitleScreenMultiplayerDescription = 59,
    MenuLoadGameDeleteSave = 60,
    MenuLoadGameDeleteSaves = 61,
    MenuLoadGameLoadingExportingSave = 62,
    MenuLoadGameLoadingImportingSave = 63,
    MenuLoadGameImportSaveFailure = 64,
    MenuLoadGameExportType = 65,
    MenuLoadGamePublishingSave = 66,
    MenuLoadGameMissingMod = 67,
    MenuLoadGameLoading = 68,
    MenuLoadGamePublishError = 69,
    MenuMainLoadingNews = 70,
    MenuMainLoadingChangelog = 71,
    MenuMainWelcomeToVersion = 72,
    MenuMainOldVersionWarning = 73,
    MenuModsConfirmPublish = 74,
    MenuModsConfirmPublishUpdate = 75,
    MenuModsModEnableMultipleLanguages = 76,
    MenuModsModEnableUseLanguage = 77,
    MenuModsPublishedReminderRequiredModsOnWorkshop = 78,
    MenuModsPublishingMod = 79,
    MenuModsPublishError = 80,
    MenuModsUpdatingMod = 81,
    MenuModsPublishUpdateError = 82,
    MenuModsInfoMissingDependencies = 83,
    MenuModsConfirmEnableDisabledDependencies = 84,
    MenuModsConfirmDisableDependents = 85,
    MenuModsConfirmUninstallMod = 86,
    MenuModsUnloadableSaveGameMod = 87,
    MenuModsSubmenuEditInternalModsModsListChangeReload = 88,
    MenuMultiplayerCannotJoinFailedToLoadMods = 89,
    MenuNewGameTooManySaves = 90,
    MenuCustomGameOptionsConfirmImport = 91,
    MenuCustomGameOptionsLoadingImporting = 92,
    MenuCustomGameOptionsImportFailure = 93,
    MenuMilestoneModifiersConfirmImport = 94,
    MenuMilestoneModifiersLoadingImporting = 95,
    MenuMilestoneModifiersImportFailure = 96,
    MenuOptionsLoading = 97,
    MenuOptionsReloadGame = 98,
    MenuOptionsConfirmUnlockMilestones = 99,
    MenuOptionsConfirmUnlockRecipes = 100,
    MenuOptionsSaveDataClearAll = 101,
    MenuOptionsSaveDataClearCharacters = 102,
    MenuOptionsSaveDataClearHighscores = 103,
    MenuOptionsSaveDataClearMilestones = 104,
    MenuOptionsSaveDataClearOptions = 105,
    MenuOptionsSaveDataClearSaves = 106,
    MenuOptionsSaveDataClearCraftingRecipes = 107,
    MenuOptionsSaveDataClearBindings = 108,
    MenuOptionsConfirmImportGlobalData = 109,
    MenuOptionsLoadingImportingGlobalData = 110,
    MenuPauseGhostKeepSave = 111,
    MenuPauseReturnToTitleScreen = 112,
    MenuPauseReturnToTitleScreenChallengeDescription = 113,
    MenuPauseReturnToTitleScreenChallengeMultiplayerDescription = 114,
    MenuPauseReturnToTitleScreenMultiplayerDescription = 115,
    MultiplayerDownloadingWorldData = 116,
    MultiplayerWaitingForWorldData = 117,
    MultiplayerFailedToConnect = 118,
    MultiplayerConnecting = 119,
    MultiplayerRestartServerAfterLoadingSave = 120,
    MultiplayerDisconnect = 121,
    SteamworksURLOpenedInBrowser = 122,
    SteamworksWorkshopOpenedInBrowser = 123,
    SteamworksModWithNameAlreadyExists = 124,
    SteamworksModImportSaveGameFailure = 125,
    SteamworksModImportedSaveGame = 126,
    SteamworksLoadingRefreshingMods = 127,
    SteamworksOpenFolderFailure = 128
}
export default Interrupt;
