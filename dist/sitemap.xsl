<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
    
    <xsl:output method="html" indent="yes"/>
    
    <xsl:template match="/">
        <html>
            <head>
            <link rel="icon" type="image/svg+xml" href="icon.svg" />
                <title>Sitemap - Dynamic Total Services</title>
                <!-- <link rel="stylesheet" href="/_astro/FAQS.DCTKlWwZ.css" /> -->
                <link rel="stylesheet" href="/_astro/FAQS.CqmcnV4Z.css" />
            </head>
            <body class="py-9 px-3 flex md:px-14 lg:px-32">
                <div class="w-full">
                    <img src="/icon.svg" alt="" class="mb-4"/>
                    <h1 class="text-3xl mb-4">Dynamic Total Services - Sitemap</h1>
                    <xsl:apply-templates select="//sitemap:url"/>
                </div>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="sitemap:url">
        <a href="{sitemap:loc}" class="my-2 p-2 border rounded-md border-gray-500 block hover:border-goldColor hover:shadow hover:underline">
            <span href="{sitemap:loc}" class="font-semi-bold">
                <xsl:value-of select="sitemap:loc"/>
            </span>
        </a>
    </xsl:template>
</xsl:stylesheet>

<!-- <?xml-stylesheet type="text/xsl" href="sitemap.xsl"?> -->
