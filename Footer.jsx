import React from 'react';


export default function Footer(){
return (
<footer className="bg-gray-900 text-white py-8 mt-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div>
<h4 className="font-semibold">NS BRAND</h4>
<p className="text-sm text-gray-400">© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
</div>


<div className="flex gap-6 text-sm text-gray-300">
<a href="/privacy" className="hover:text-white">Privacy</a><br />
<a href="/terms" className="hover:text-white">Terms</a><br />
<a href="/contact" className="hover:text-white">Contact</a><br />
</div>
</div>
</footer>
);
}