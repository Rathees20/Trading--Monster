import React, { useState, useRef, useEffect } from "react";

export default function RichTextEditor({ value, onChange, placeholder = "Write something amazing...", minHeight = "200px" }) {
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const editorRef = useRef(null);

  const fileInputRef = useRef(null);
  const savedRangeRef = useRef(null);

  const saveSelection = () => {
    const sel = window.getSelection();
    if (sel.rangeCount > 0) {
      savedRangeRef.current = sel.getRangeAt(0);
    }
  };

  const restoreSelection = () => {
    if (savedRangeRef.current) {
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(savedRangeRef.current);
    } else if (editorRef.current) {
      editorRef.current.focus();
      const range = document.createRange();
      range.selectNodeContents(editorRef.current);
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  // Sync external value updates to editor innerHTML ONLY when not in focus or if value is empty/different
  useEffect(() => {
    if (editorRef.current && !isHtmlMode) {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value || "";
      }
    }
  }, [value, isHtmlMode]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleBlur = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const insertHTMLAtCursor = (html) => {
    if (isHtmlMode) return;
    if (editorRef.current) {
      editorRef.current.focus();
    }
    restoreSelection();

    const sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      let range = sel.getRangeAt(0);
      range.deleteContents();

      // Create a temporary element to hold the node
      const el = document.createElement("div");
      el.innerHTML = html;
      const frag = document.createDocumentFragment();
      let node;
      let lastNode;
      while ((node = el.firstChild)) {
        lastNode = frag.appendChild(node);
      }
      range.insertNode(frag);

      // Preserve selection cursor after insertion
      if (lastNode) {
        range = range.cloneRange();
        range.setStartAfter(lastNode);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
      }
      
      onChange(editorRef.current.innerHTML);
    }
  };

  const executeCommand = (command, value = null) => {
    if (isHtmlMode) return; // Command actions not available in HTML code mode
    if (editorRef.current) {
      editorRef.current.focus();
    }
    document.execCommand(command, false, value);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const insertLink = () => {
    if (isHtmlMode) return;
    const selection = window.getSelection();
    const selectedText = selection.toString();
    const url = prompt("Enter URL:", "https://");
    
    if (url) {
      if (selectedText) {
        executeCommand("createLink", url);
      } else {
        // If no text is selected, insert link with the URL as text
        const anchor = `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-amber-400 hover:underline">${url}</a>`;
        insertHTMLAtCursor(anchor);
      }
    }
  };

  const handleImageInsert = (e) => {
    if (isHtmlMode) return;
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgHtml = `<div><p><br></p><img src="${reader.result}" alt="Inline image" class="max-w-full my-4 rounded-xl border border-white/10 mx-auto shadow-lg" style="display: block; max-height: 400px; object-fit: contain;" /><p><br></p></div>`;
        insertHTMLAtCursor(imgHtml);
      };
      reader.readAsDataURL(file);
    }
    // Clear the input value so the same image can be uploaded/inserted consecutively
    e.target.value = "";
  };

  const setHeading = (type) => {
    executeCommand("formatBlock", type);
  };

  return (
    <div className="w-full rounded-xl border border-white/10 bg-neutral-900 overflow-hidden flex flex-col focus-within:ring-1 focus-within:ring-amber-500/50 transition-all">
      {/* Hidden File Input for Image Upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageInsert}
        accept="image/*"
        className="hidden"
      />

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1.5 p-2 bg-neutral-950/60 border-b border-white/10 select-none">
        {/* HTML / Visual Toggle */}
        <button
          type="button"
          onClick={() => {
            setIsHtmlMode(!isHtmlMode);
            // Focus on appropriate editor component next tick
            setTimeout(() => {
              if (editorRef.current && isHtmlMode) {
                editorRef.current.focus();
              }
            }, 50);
          }}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition ${
            isHtmlMode
              ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
              : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
          }`}
          title="Toggle HTML Source Code View"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          {isHtmlMode ? "Visual Editor" : "HTML Code"}
        </button>

        <div className="w-px h-5 bg-white/10 my-0.5 mx-1" />

        {/* Text Formats */}
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => executeCommand("bold")}
            className={`p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition disabled:opacity-30 disabled:hover:bg-transparent`}
            title="Bold (Ctrl+B)"
          >
            <span className="font-bold text-sm block px-0.5">B</span>
          </button>
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => executeCommand("italic")}
            className={`p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition disabled:opacity-30 disabled:hover:bg-transparent`}
            title="Italic (Ctrl+I)"
          >
            <span className="italic font-serif text-sm block px-0.5">I</span>
          </button>
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => executeCommand("underline")}
            className={`p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition disabled:opacity-30 disabled:hover:bg-transparent`}
            title="Underline (Ctrl+U)"
          >
            <span className="underline text-sm block px-0.5">U</span>
          </button>
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => executeCommand("strikeThrough")}
            className={`p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition disabled:opacity-30 disabled:hover:bg-transparent`}
            title="Strikethrough"
          >
            <span className="line-through text-sm block px-0.5">S</span>
          </button>
        </div>

        <div className="w-px h-5 bg-white/10 my-0.5 mx-1" />

        {/* Headings */}
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => setHeading("<p>")}
            className="px-2 py-1 rounded-lg text-[10px] font-bold text-white/60 hover:text-white hover:bg-white/5 transition disabled:opacity-30"
            title="Normal Paragraph"
          >
            Normal
          </button>
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => setHeading("<h3>")}
            className="px-2 py-1 rounded-lg text-[10px] font-bold text-white/60 hover:text-white hover:bg-white/5 transition disabled:opacity-30"
            title="Subheading H3"
          >
            H3
          </button>
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => setHeading("<h4>")}
            className="px-2 py-1 rounded-lg text-[10px] font-bold text-white/60 hover:text-white hover:bg-white/5 transition disabled:opacity-30"
            title="Minor Heading H4"
          >
            H4
          </button>
        </div>

        <div className="w-px h-5 bg-white/10 my-0.5 mx-1" />

        {/* Alignment */}
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => executeCommand("justifyLeft")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition disabled:opacity-30"
            title="Align Left"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h16" />
            </svg>
          </button>
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => executeCommand("justifyCenter")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition disabled:opacity-30"
            title="Align Center"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => executeCommand("justifyRight")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition disabled:opacity-30"
            title="Align Right"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M10 12h10M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="w-px h-5 bg-white/10 my-0.5 mx-1" />

        {/* Lists & Quotes */}
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => executeCommand("insertUnorderedList")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition disabled:opacity-30"
            title="Bulleted List"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16M2 6h.01M2 12h.01M2 18h.01" />
            </svg>
          </button>
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => executeCommand("insertOrderedList")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition disabled:opacity-30"
            title="Numbered List"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h13M7 12h13M7 16h13M3 8v3m0 0h1m-1 0H2m1-3H2.5M3 16h1a1 1 0 011 1v1a1 1 0 01-1 1H3m0-3v3" />
            </svg>
          </button>
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => setHeading("<blockquote>")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition disabled:opacity-30"
            title="Blockquote"
          >
            <span className="font-serif font-bold text-sm block px-0.5">”</span>
          </button>
        </div>

        <div className="w-px h-5 bg-white/10 my-0.5 mx-1" />

        {/* Links, Images & Clear */}
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={insertLink}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition disabled:opacity-30"
            title="Insert Link"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </button>
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => {
              saveSelection();
              fileInputRef.current.click();
            }}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition disabled:opacity-30"
            title="Insert Inline Image"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          <button
            type="button"
            disabled={isHtmlMode}
            onClick={() => executeCommand("removeFormat")}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition disabled:opacity-30"
            title="Clear Formatting"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Editor Content Area */}
      <div className="flex-1 bg-white/5 flex flex-col relative">
        {isHtmlMode ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full flex-1 bg-transparent p-4 text-xs font-mono text-white/95 focus:outline-none resize-y"
            style={{ minHeight }}
            placeholder="Write content as raw HTML..."
          />
        ) : (
          <div
            ref={editorRef}
            contentEditable
            onInput={handleInput}
            onBlur={() => {
              handleBlur();
              saveSelection();
            }}
            onKeyUp={saveSelection}
            onMouseUp={saveSelection}
            className="w-full flex-1 p-4 text-xs text-white/95 outline-none overflow-y-auto prose prose-invert prose-p:text-white/80 prose-headings:text-white prose-a:text-amber-400 focus:outline-none custom-editor-content"
            style={{ minHeight }}
            placeholder={placeholder}
          />
        )}
      </div>

      {/* Basic instructions style */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-editor-content:empty:before {
          content: attr(placeholder);
          color: rgba(255, 255, 255, 0.25);
          pointer-events: none;
          display: block;
        }
        .custom-editor-content p {
          margin-bottom: 0.75rem;
        }
        .custom-editor-content h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        .custom-editor-content h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #f59e0b;
          margin-top: 0.75rem;
          margin-bottom: 0.25rem;
        }
        .custom-editor-content ul {
          list-style-type: disc;
          padding-left: 1.25rem;
          margin-bottom: 0.75rem;
        }
        .custom-editor-content ol {
          list-style-type: decimal;
          padding-left: 1.25rem;
          margin-bottom: 0.75rem;
        }
        .custom-editor-content blockquote {
          border-left: 3px solid #f59e0b;
          padding-left: 0.75rem;
          margin: 0.75rem 0;
          font-style: italic;
          color: rgba(255, 255, 255, 0.7);
        }
        .custom-editor-content a {
          color: #f59e0b;
          text-decoration: underline;
        }
        .custom-editor-content img {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 1.5rem auto;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
          opacity: 1 !important;
          visibility: visible !important;
        }
      `}} />
    </div>
  );
}
