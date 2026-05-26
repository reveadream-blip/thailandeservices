<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="fr">
      <head>
        <meta charset="UTF-8"/>
        <title>Sitemap — Thailande-services.fr</title>
        <style>
          body { font-family: system-ui, sans-serif; margin: 2rem; color: #1a3a4a; }
          h1 { font-size: 1.5rem; }
          table { border-collapse: collapse; width: 100%; margin-top: 1rem; }
          th, td { border: 1px solid #d0e4ee; padding: 0.5rem 0.75rem; text-align: left; vertical-align: top; }
          th { background: #e8f4fa; }
          tr:nth-child(even) { background: #f8fcfe; }
          a { color: #0e7490; word-break: break-all; }
          .alt { font-size: 0.85rem; color: #555; }
        </style>
      </head>
      <body>
        <h1>Sitemap — Thailande-services.fr</h1>
        <p><xsl:value-of select="count(s:urlset/s:url)"/> URL(s)</p>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Langues alternatives</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="s:urlset/s:url">
              <tr>
                <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                <td class="alt">
                  <xsl:for-each select="xhtml:link">
                    <xsl:value-of select="@hreflang"/>: <xsl:value-of select="@href"/>
                    <xsl:if test="position()!=last()"><br/></xsl:if>
                  </xsl:for-each>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
