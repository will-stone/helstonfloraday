import fs from 'node:fs/promises'
import path from 'node:path'
import { nanoid } from 'nanoid'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const folderPath = path.join(__dirname, 'src', 'images', 'gallery')

try {
  const files = await fs.readdir(folderPath)

  for (const file of files) {
    const oldPath = path.join(folderPath, file)
    const extension = path.extname(file)
    const newFileName = `${nanoid()}${extension}`
    const newPath = path.join(folderPath, newFileName)

    await fs.rename(oldPath, newPath)
    console.log(`Renamed ${file} to ${newFileName}`)
  }
} catch (err) {
  console.error('Error:', err)
}
