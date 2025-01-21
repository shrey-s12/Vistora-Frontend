import React from 'react';

const Footer = () => {
    return (
        <>
            {/* Back to Top Section */}
            <div className="bg-gray-900 text-white py-3 text-center">
                <a href="#top" className="text-sm hover:underline">Back to top</a>
            </div>

            {/* Footer Links Section */}
            <div className="bg-gray-800 text-white py-6 border-b border-gray-600">
                <div className="w-[70%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Get to Know Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Get to Know Us</h3>
                        <ul>
                            <li><a href="#" className="text-sm text-white hover:underline">About Vistora</a></li>
                            <li><a href="#" className="text-sm text-white hover:underline">Careers</a></li>
                            <li><a href="#" className="text-sm text-white hover:underline">Press Releases</a></li>
                            <li><a href="#" className="text-sm text-white hover:underline">Vistora Science</a></li>
                        </ul>
                    </div>

                    {/* Connect with Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
                        <ul>
                            <li><a href="#" className="text-sm text-white hover:underline">Facebook</a></li>
                            <li><a href="#" className="text-sm text-white hover:underline">Twitter</a></li>
                            <li><a href="#" className="text-sm text-white hover:underline">Instagram</a></li>
                        </ul>
                    </div>

                    {/* Make Money with Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Make Money with Us</h3>
                        <ul>
                            <li><a href="#" className="text-sm text-white hover:underline">Sell on Vistora</a></li>
                            <li><a href="#" className="text-sm text-white hover:underline">Sell under Vistora Accelerator</a></li>
                            <li><a href="#" className="text-sm text-white hover:underline">Protect and Build Your Brand</a></li>
                            <li><a href="#" className="text-sm text-white hover:underline">Advertise Your Products</a></li>
                        </ul>
                    </div>

                    {/* Let Us Help You */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Let Us Help You</h3>
                        <ul>
                            <li><a href="#" className="text-sm text-white hover:underline">Your Account</a></li>
                            <li><a href="#" className="text-sm text-white hover:underline">Returns Centre</a></li>
                            <li><a href="#" className="text-sm text-white hover:underline">Recalls and Product Safety Alerts</a></li>
                            <li><a href="#" className="text-sm text-white hover:underline">Help</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-gray-800 text-white py-6 text-center">
                <h3>Vistora</h3>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-gray-900 text-white py-3 text-center">
                <div className="text-sm">
                    <p className="mt-2">Conditions of Use & Sale | Privacy Notice | Interest-Based Ads</p>
                    <p>© 2025 Vistora.com, Inc. or its affiliates</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
