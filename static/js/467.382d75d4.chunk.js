"use strict";(self.webpackChunkecom_website=self.webpackChunkecom_website||[]).push([[467],{3661:function(e,s,t){t.d(s,{Z:function(){return l}});t(2791);var c=t(1087),n=t(303),i=t(115),r=t(184),l=function(e){var s=e.categoryName;return(0,r.jsx)("div",{className:"navigator-body",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(c.rU,{className:"flexcenter",to:"/",children:(0,r.jsx)(n.Z,{style:{fontSize:"large",color:"grey"}})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.Z,{style:{color:"grey"}})}),void 0===s?(0,r.jsx)("li",{children:"Cart"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("li",{children:"Category"}),(0,r.jsx)("li",{children:(0,r.jsx)(i.Z,{style:{color:"grey"}})}),(0,r.jsx)("li",{children:s})]})]})})}},7467:function(e,s,t){t.r(s),t.d(s,{default:function(){return x}});var c=t(2791),n=t(9434),i=t(1696),r=t(3661),l=t(7247),a=t(1084),d=t(184),o=function(){var e=(0,n.I0)(),s=(0,n.v9)((function(e){return e.cart})).data;return(0,d.jsxs)("div",{className:"cart-left",children:[(0,d.jsx)("div",{className:"cart-items",children:s.map((function(s){return(0,d.jsxs)("div",{className:"cart-item",children:[(0,d.jsxs)("div",{className:"cart-item-img",children:[(0,d.jsx)("img",{src:s.images[0],alt:s.title}),(0,d.jsx)("div",{className:"cart-item-remove",children:(0,d.jsx)("button",{className:"whitebtn rmv-from-cart-btn",onClick:function(){return e((0,i.h2)({id:s.id}))},children:(0,d.jsx)("span",{id:"activebtn",className:"whitebtn trash-icon",children:(0,d.jsx)(l.Z,{})})})})]}),(0,d.jsxs)("div",{className:"cart-item-info flexcolumn",children:[(0,d.jsx)("h6",{children:s.title}),(0,d.jsxs)("div",{className:"cqty",children:[(0,d.jsx)("span",{className:"cqty-text flexcenter",children:"Qty:"}),(0,d.jsxs)("div",{className:"cqty-change flexrow",children:[(0,d.jsx)("button",{className:"whitebtn cqty-dec flexcenter",onClick:function(){return e((0,i.I4)({id:s.id,type:"DEC"}))},children:(0,d.jsx)("i",{className:"fa-solid fa-minus"})}),(0,d.jsx)("span",{className:"cqty-value flexcenter",children:s.quantity}),(0,d.jsx)("button",{className:"whitebtn cqty-inc flexcenter",onClick:function(){return e((0,i.I4)({id:s.id,type:"INC"}))},children:(0,d.jsx)("i",{className:"fa-solid fa-plus"})})]})]}),(0,d.jsxs)("div",{className:"prices flexrow",children:[(0,d.jsxs)("div",{className:"price flexrow inline-flex",children:[(0,d.jsx)("p",{style:{marginRight:"6px"},children:"Price:"}),(0,d.jsx)("p",{children:(0,d.jsx)(a.Z,{style:{fontSize:"medium"}})}),(0,d.jsx)("p",{children:s.price})]}),(0,d.jsxs)("div",{className:"sub-total-csection flexrow inline-flex",children:[(0,d.jsx)("p",{className:"flexcenter",children:"Sub Total:"}),(0,d.jsxs)("p",{className:"flexcenter",children:[(0,d.jsx)(a.Z,{style:{fontSize:"large"}}),s.totalPrice]})]})]})]})]},s.id)}))}),(0,d.jsx)("div",{className:"button-box",children:(0,d.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return e((0,i.LL)())},children:"Clear Cart"})})]})},h=function(e){var s=e.totalItems,t=(0,n.v9)((function(e){return e.cart})),c=t.totalAmount,i=t.totalDeliveryCharge;return(0,d.jsx)("div",{className:"cart-right-section",children:(0,d.jsx)("div",{className:"cart-right",children:(0,d.jsxs)("div",{className:"cart-summary",children:[(0,d.jsx)("div",{className:"cart-summary-title",children:(0,d.jsx)("h6",{children:"Order Summary"})}),(0,d.jsxs)("ul",{className:"cart-summary-info",children:[(0,d.jsxs)("li",{children:[(0,d.jsxs)("span",{children:["Selected ",s," item(s) Price"]}),(0,d.jsx)("span",{children:c})]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("span",{style:{fontWeight:"400"},children:"Discount"}),(0,d.jsxs)("span",{style:{fontWeight:"700"},children:[(0,d.jsx)("span",{style:{fontWeight:"500",color:"red"},children:"-\xa0"}),"0"]})]}),(0,d.jsxs)("li",{children:[(0,d.jsx)("span",{style:{fontWeight:"400"},children:"Delivery Cost"}),(0,d.jsxs)("span",{style:{fontWeight:"700"},children:[(0,d.jsx)("span",{style:{fontWeight:"500",color:"goldenRod"},children:"+\xa0"}),i]})]})]}),(0,d.jsxs)("div",{className:"cart-summary-total",children:[(0,d.jsx)("span",{children:"Grand Total:"}),(0,d.jsx)("span",{children:c+i})]}),(0,d.jsx)("div",{className:"cart-summary-btn",children:(0,d.jsx)("button",{className:"btn btn-warning",children:"Proceed to checkout"})})]})})})},x=function(){var e=(0,n.I0)(),s=(0,n.v9)((function(e){return e.cart})),t=s.data,l=s.totalItems;(0,c.useEffect)((function(){e((0,i.I3)())}),[(0,n.v9)((function(e){return e.cart}))]);var a=(0,d.jsx)("h4",{children:"No items found!"});return(0,d.jsxs)("div",{className:"cart-page",children:[(0,d.jsx)(r.Z,{}),(0,d.jsx)("div",{className:"cart-section",children:(0,d.jsxs)("div",{className:"container",style:{maxWidth:"95%"},children:[(0,d.jsx)("div",{className:"csection-title",children:(0,d.jsx)("h3",{children:"My Cart"})}),0===t.length?a:(0,d.jsxs)("div",{className:"cart-content",children:[(0,d.jsx)(o,{}),(0,d.jsx)(h,{totalItems:l})]})]})})]})}},7247:function(e,s,t){var c=t(4836);s.Z=void 0;var n=c(t(5649)),i=t(184),r=(0,n.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");s.Z=r},303:function(e,s,t){var c=t(4836);s.Z=void 0;var n=c(t(5649)),i=t(184),r=(0,n.default)((0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"}),"HomeRounded");s.Z=r},115:function(e,s,t){var c=t(4836);s.Z=void 0;var n=c(t(5649)),i=t(184),r=(0,n.default)((0,i.jsx)("path",{d:"M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"}),"KeyboardArrowRightRounded");s.Z=r}}]);
//# sourceMappingURL=467.382d75d4.chunk.js.map