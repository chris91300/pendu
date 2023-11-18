import { screen } from '@testing-library/react'
import { curry } from 'ramda'

//  APPLICATION START
        //  TEST OPTIONS
        /**
         *  hidden?: boolean = false,
            name?: TextMatch,
            description?: TextMatch,
            selected?: boolean,
            busy?: boolean,
            checked?: boolean,
            pressed?: boolean,
            suggest?: boolean,
            current?: boolean | string,
            expanded?: boolean,
            queryFallbacks?: boolean,
            level?: number,
            value?: {
            min?: number,
            max?: number,
            now?: number,
            text?: TextMatch,
            }
         */
        //  JE TEST TOUTES LES OPTIONS POSSIBLE 
        //const element = screen.getByRole("treegrid", { hidden: true })

const getRole = curry( (role, options) => screen.getByRole( role, options ) )


export const getAlert = getRole( "alert" )

export const getAlertDialog = getRole( "alertdialog" )

export const getApplication = getRole( "application" )

export const getArticle = getRole( "article" )

export const getBanner = getRole( "banner" )

export const getBlockquote = getRole( "blockquote" )

export const getButton = getRole( "button" )

export const getCaption = getRole( "caption" )

export const getCell = getRole( "cell" )

export const getCheckbox = getRole( "checkbox" )

export const getCode = getRole( "code" )

export const getColumnheader = getRole( "columnheader" )

export const getCombobox = getRole( "combobox" )

export const getComplementary = getRole( "complementary" )

export const getContentinfo = getRole( "contentinfo" )

export const getDefinition = getRole( "definition" )

export const getDeletion = getRole( "deletion" )

export const getDialog = getRole( "dialog" )

export const getDirectory = getRole( "directory" )

export const getDocument = getRole( "document" )

export const getEmphasis = getRole( "emphasis" )

export const getFeed = getRole( "feed" )

export const getFigure = getRole( "figure" )

export const getForm = getRole( "form" )

export const getGeneric = getRole( "generic" )

export const getGrid = getRole( "grid" )

export const getGridcell = getRole( "gridcell" )

export const getGroup = getRole( "group" )

export const getHeading = getRole( "heading" )

export const getImg = getRole( "img" )

export const getInsertion = getRole( "insertion" )

export const getLink = getRole( "link" )

export const getList = getRole( "list" )

export const getListbox = getRole( "listbox" )

export const getListitem = getRole( "listitem" )

export const getLog = getRole( "log" )

export const getMain = getRole( "main" )

export const getMarquee = getRole( "marquee" )

export const getMath = getRole( "math" )

export const getMenu = getRole( "menu" )

export const getMenubar = getRole( "menubar" )

export const getMenuitem = getRole( "menuitem" )

export const getMenuitemcheckbox = getRole( "menuitemcheckbox" )

export const getMenuitemradio = getRole( "menuitemradio" )

export const getMeter = getRole( "meter" )

export const getNavigation = getRole( "navigation" )

export const getNone = getRole( "none" )

export const getNote = getRole( "note" )

export const getOption = getRole( "option" )

export const getParagraph = getRole( "paragraph" )

export const getPresentation = getRole( "presentation" )

export const getProgressbar = getRole( "progressbar" )

export const getRadio = getRole( "radio" )

export const getRadiogroup = getRole( "radiogroup" )

export const getRegion = getRole( "region" )

export const getRow = getRole( "row" )

export const getRowgroup = getRole( "rowgroup" )

export const getRowheader = getRole( "rowheader" )

export const getScrollbar = getRole( "scrollbar" )

export const getSearch = getRole( "search" )

export const getSearchbox = getRole( "searchbox" )

export const getSeparator = getRole( "separator" )

export const getSlider = getRole( "slider" )

export const getSpinbutton = getRole( "spinbutton" )

export const getStatus = getRole( "status" )

export const getStrong = getRole( "strong" )

export const getSubscript = getRole( "subscript" )

export const getSuperscript = getRole( "superscript" )

export const getSwitch = getRole( "switch" )

export const getTab = getRole( "tab" )

export const getTable = getRole( "table" )

export const getTabpanel = getRole( "tabpanel" )

export const getTerm = getRole( "term" )

export const getTextbox = getRole( "textbox" )

export const getTime = getRole( "time" )

export const getTimer = getRole( "timer" )

export const getToolbar = getRole( "toolbar" )

export const getTooltip = getRole( "tooltip" )

export const getTree = getRole( "tree" )

export const getTreegrid = getRole( "treegrid" )

export const getTreeitem = getRole( "treeitem" )

