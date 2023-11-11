import { screen } from '@testing-library/react'
import { curry } from 'ramda'

const getAllRole = curry( (role, options) => screen.getAllByRole( role, options ) )


export const getAllAlert = getAllRole( "alert" )

export const getAllAlertDialog = getAllRole( "alertdialog" )

export const getAllApplication = getAllRole( "application" )

export const getAllArticle = getAllRole( "article" )

export const getAllBanner = getAllRole( "banner" )

export const getAllBlockquote = getAllRole( "blockquote" )

export const getAllButton = getAllRole( "button" )

export const getAllCaption = getAllRole( "caption" )

export const getAllCell = getAllRole( "cell" )

export const getAllCheckbox = getAllRole( "checkbox" )

export const getAllCode = getAllRole( "code" )

export const getAllColumnheader = getAllRole( "columnheader" )

export const getAllCombobox = getAllRole( "combobox" )

export const getAllComplementary = getAllRole( "complementary" )

export const getAllContentinfo = getAllRole( "contentinfo" )

export const getAllDefinition = getAllRole( "definition" )

export const getAllDeletion = getAllRole( "deletion" )

export const getAllDialog = getAllRole( "dialog" )

export const getAllDirectory = getAllRole( "directory" )

export const getAllDocument = getAllRole( "document" )

export const getAllEmphasis = getAllRole( "emphasis" )

export const getAllFeed = getAllRole( "feed" )

export const getAllFigure = getAllRole( "figure" )

export const getAllForm = getAllRole( "form" )

export const getAllGeneric = getAllRole( "generic" )

export const getAllGrid = getAllRole( "grid" )

export const getAllGridcell = getAllRole( "gridcell" )

export const getAllGroup = getAllRole( "group" )

export const getAllHeading = getAllRole( "heading" )

export const getAllImg = getAllRole( "img" )

export const getAllInsertion = getAllRole( "insertion" )

export const getAllLink = getAllRole( "link" )

export const getAllList = getAllRole( "list" )

export const getAllListbox = getAllRole( "listbox" )

export const getAllListitem = getAllRole( "listitem" )

export const getAllLog = getAllRole( "log" )

export const getAllMain = getAllRole( "main" )

export const getAllMarquee = getAllRole( "marquee" )

export const getAllMath = getAllRole( "math" )

export const getAllMenu = getAllRole( "menu" )

export const getAllMenubar = getAllRole( "menubar" )

export const getAllMenuitem = getAllRole( "menuitem" )

export const getAllMenuitemcheckbox = getAllRole( "menuitemcheckbox" )

export const getAllMenuitemradio = getAllRole( "menuitemradio" )

export const getAllMeter = getAllRole( "meter" )

export const getAllNavigation = getAllRole( "navigation" )

export const getAllNone = getAllRole( "none" )

export const getAllNote = getAllRole( "note" )

export const getAllOption = getAllRole( "option" )

export const getAllParagraph = getAllRole( "paragraph" )

export const getAllPresentation = getAllRole( "presentation" )

export const getAllProgressbar = getAllRole( "progressbar" )

export const getAllRadio = getAllRole( "radio" )

export const getAllRadiogroup = getAllRole( "radiogroup" )

export const getAllRegion = getAllRole( "region" )

export const getAllRow = getAllRole( "row" )

export const getAllRowgroup = getAllRole( "rowgroup" )

export const getAllRowheader = getAllRole( "rowheader" )

export const getAllScrollbar = getAllRole( "scrollbar" )

export const getAllSearch = getAllRole( "search" )

export const getAllSearchbox = getAllRole( "searchbox" )

export const getAllSeparator = getAllRole( "separator" )

export const getAllSlider = getAllRole( "slider" )

export const getAllSpinbutton = getAllRole( "spinbutton" )

export const getAllStatus = getAllRole( "status" )

export const getAllStrong = getAllRole( "strong" )

export const getAllSubscript = getAllRole( "subscript" )

export const getAllSuperscript = getAllRole( "superscript" )

export const getAllSwitch = getAllRole( "switch" )

export const getAllTab = getAllRole( "tab" )

export const getAllTable = getAllRole( "table" )

export const getAllTabpanel = getAllRole( "tabpanel" )

export const getAllTerm = getAllRole( "term" )

export const getAllTextbox = getAllRole( "textbox" )

export const getAllTime = getAllRole( "time" )

export const getAllTimer = getAllRole( "timer" )

export const getAllToolbar = getAllRole( "toolbar" )

export const getAllTooltip = getAllRole( "tooltip" )

export const getAllTree = getAllRole( "tree" )

export const getAllTreegrid = getAllRole( "treegrid" )

export const getAllTreeitem = getAllRole( "treeitem" )
screen.getByRole("")
