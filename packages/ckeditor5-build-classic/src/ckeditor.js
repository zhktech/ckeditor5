import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
// import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
// import Autosave from "@ckeditor/ckeditor5-autosave/src/autosave";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters";
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials";
import PageBreak from "@ckeditor/ckeditor5-page-break/src/pagebreak";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
// import ArticlePluginSet from '@ckeditor/ckeditor5-core/tests/_utils/articlepluginset';
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import Mention from "@ckeditor/ckeditor5-mention/src/mention";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";

var IFRAME_SRC = "//cdn.iframe.ly/api/iframe";
var API_KEY = "https://iframe.ly/api/iframely?url=http://iframe.ly/ACcM3Y";
// Your API key from https://iframely.com/profile';

const customColorPalette = [
	{
		color: "hsl(0, 0%, 100%)",
		label: "White",
	},
	{
		color: "hsl(60, 100%, 50%)",
		label: "Yellow",
	},
	{
		color: "hsl(120, 100%, 25%",
		label: "Green",
	},
	{
		color: "hsl(0, 100%, 0%)",
		label: "Black",
	},
	{
		color: "hsl(24, 100%, 22%)",
		label: "Brown",
	},
	{
		color: "hsl(4, 90%, 58%)",
		label: "Red",
	},
	{
		color: "hsl(340, 82%, 52%)",
		label: "Pink",
	},
	{
		color: "hsl(291, 64%, 42%)",
		label: "Purple",
	},
	{
		color: "hsl(262, 52%, 47%)",
		label: "Deep Purple",
	},
	{
		color: "hsl(231, 48%, 48%)",
		label: "Indigo",
	},
	{
		color: "hsl(207, 90%, 54%)",
		label: "Blue",
	},

	// ...
];

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	// ArticlePluginSet,
	CodeBlock,
	Alignment,
	SpecialCharacters,
	SpecialCharactersEssentials,
	Code,
	Underline,
	Strikethrough,
	Superscript,
	Subscript,
	Highlight,
	FontColor,
	FontBackgroundColor,
	FontFamily,
	FontSize,
	IndentBlock,
	WordCount,
	TodoList,
	PageBreak,
	HorizontalLine,
	Mention,
	RemoveFormat,
	TextTransformation,
	// Autosave,
	// ImageResize,
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TableProperties,
	TableCellProperties,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			"heading",
			"|",
			"removeFormat",
			"bold",
			"italic",
			"strikethrough",
			"underline",
			"code",
			"subscript",
			"superscript",
			"link",
			"|",
			"highlight",
			"fontSize",
			"fontFamily",
			"fontColor",
			"fontBackgroundColor",
			"|",
			"bulletedList",
			"numberedList",
			"todoList",
			"|",
			"blockQuote",
			"imageUpload",
			"insertTable",
			"mediaEmbed",
			"codeBlock",
			"|",
			"alignment",
			"outdent",
			"indent",
			"|",
			"pageBreak",
			"horizontalLine",
			"specialCharacters",
			"|",
			"undo",
			"redo",
		],
	},
	mediaEmbed: {
		// Previews are always enabled if there’s a provider for a URL (below regex catches all URLs)
		// By default `previewsInData` are disabled, but let’s set it to `false` explicitely to be sure
		previewsInData: true,

		providers: [
			{
				name: "dailymotion",
				html: (id) =>
					'<div style="position: relative; padding-bottom: 100%; height: 0; ">' +
					`<iframe src="https://www.dailymotion.com/embed/video/${id}" ` +
					'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
					'frameborder="0" width="480" height="270" allowfullscreen allow="autoplay">' +
					"</iframe>" +
					"</div>",
			},

			{
				name: "spotify",
				url: [
					/^open\.spotify\.com\/(artist\/\w+)/,
					/^open\.spotify\.com\/(album\/\w+)/,
					/^open\.spotify\.com\/(track\/\w+)/,
				],
				html: (id) =>
					'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;">' +
					`<iframe src="https://open.spotify.com/embed/${id}" ` +
					'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
					'frameborder="0" allowtransparency="true" allow="encrypted-media">' +
					"</iframe>" +
					"</div>",
			},
		],
	},

	image: {
		styles: ["full", "alignLeft", "alignRight"],
		toolbar: [
			"imageTextAlternative",
			"|",
			"imageStyle:alignLeft",
			"imageStyle:full",
			"imageStyle:alignRight",
		],
	},
	placeholder: "Type the content here!",
	mention: {
		feeds: [
			{
				marker: "@",
				feed: [
					"@apple",
					"@bears",
					"@brownie",
					"@cake",
					"@cake",
					"@candy",
					"@canes",
					"@chocolate",
					"@cookie",
					"@cotton",
					"@cream",
					"@cupcake",
					"@danish",
					"@donut",
					"@dragée",
					"@fruitcake",
					"@gingerbread",
					"@gummi",
					"@ice",
					"@jelly-o",
					"@liquorice",
					"@macaroon",
					"@marzipan",
					"@oat",
					"@pie",
					"@plum",
					"@pudding",
					"@sesame",
					"@snaps",
					"@soufflé",
					"@sugar",
					"@sweet",
					"@topping",
					"@wafer",
				],
				minimumCharacters: 1,
			},
		],
	},
	table: {
		contentToolbar: [
			"tableColumn",
			"tableRow",
			"mergeTableCells",
			"tableProperties",
			"tableCellProperties",
		],
		tableProperties: {
			borderColors: customColorPalette,
			backgroundColors: customColorPalette,
		},

		// Configuration of the TableCellProperties plugin.
		tableCellProperties: {
			borderColors: customColorPalette,
			backgroundColors: customColorPalette,
		},
	},
	fontSize: {
		options: [9, 11, 13, "default", 17, 19, 21],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "fa",
};
