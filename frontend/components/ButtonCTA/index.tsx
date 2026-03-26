import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";
import SelectForm from "../ui/select";

export const ButtonCTA = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const requiredFields = [
      "name",
      "email",
      "phone",
      "certificate",
      "propertyType",
      "landArea",
      "buildingArea",
      "propertyLocation",
      "agent",
    ];

    const emptyFields = requiredFields.filter((field) => !formData.get(field));
    if (emptyFields.length > 0) {
      alert("Harap isi semua kolom sebelum submit!");
      return;
    }

    const agentNumberMap: Record<string, string> = {
      Veve: "6281575735788",
      Alfin: "6285701660873",
      Michelle: "6285643057895",
    };

    const agent = formData.get("agent") as string;
    const whatsappNumber = agentNumberMap[agent];

    if (!whatsappNumber) {
      alert("Agen tidak valid!");
      return;
    }

    const message = `
        Hai ${agent} - Info Perumahan Semarang, saya tertarik untuk titip jual properti saya melalui platform Anda. Berikut adalah detailnya:

        *Form Titip Jual - Info Perumahan Semarang*
        ================================
        Nama: ${formData.get("name")}
        Email: ${formData.get("email")}
        No. Telepon: ${formData.get("phone")}
        Jenis Sertifikat: ${formData.get("certificate")}
        Jenis Properti: ${formData.get("propertyType")}
        Luas Tanah: ${formData.get("landArea")} m²
        Luas Bangunan: ${formData.get("buildingArea")} m²
        Lokasi Properti: ${formData.get("propertyLocation")}
        ================================
    `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={`${styles.Button} amber`}>Jual Sekarang di Sini!</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.Overlay} />

        <Dialog.Content className={styles.Content}>
          <form onSubmit={handleSubmit}>
            <Dialog.Title className={styles.Title}>Form Titip Jual</Dialog.Title>
            <Dialog.Description className={styles.Description}>
              Untuk mulai titip jual, silahkan isi semua kolom di bawah ini.
            </Dialog.Description>

            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="name">Nama</label>
              <input className={styles.Input} id="name" name="name" placeholder="Contoh: John Doe" autoComplete="off" required />
            </fieldset>

            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="email">Email</label>
              <input className={styles.Input} type="email" id="email" name="email" placeholder="Contoh: john.doe@example.com" autoComplete="off" required />
            </fieldset>

            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="phone">No. Telepon</label>
              <input className={styles.Input} type="tel" inputMode="numeric" id="phone" name="phone" placeholder="Contoh: 081234567890" autoComplete="off" required />
            </fieldset>

            <hr className={styles.Separator} />

            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="certificate">Jenis Sertifikat Properti</label>
              <SelectForm name="certificate" options={["HGB", "SHGB", "SHM"]} placeholder="Pilih sertifikat" />
            </fieldset>

            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="propertyType">Jenis Properti</label>
              <SelectForm name="propertyType" options={["Rumah", "Ruko", "Kost", "Gudang", "Tanah", "Lainnya"]} placeholder="Pilih properti" />
            </fieldset>

            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="landArea">Luas tanah (m²)</label>
              <input className={styles.Input} type="number" name="landArea" placeholder="Contoh: 120" required />
            </fieldset>

            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="buildingArea">Luas bangunan (m²)</label>
              <input className={styles.Input} type="number" name="buildingArea" placeholder="Contoh: 120" required />
            </fieldset>

            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="propertyLocation">Lokasi Properti</label>
              <input className={styles.Input} id="propertyLocation" name="propertyLocation" placeholder="Contoh: Semarang, Jawa Tengah" required />
            </fieldset>

            <hr className={styles.Separator} />

            <fieldset className={styles.Fieldset}>
              <label className={styles.Label} htmlFor="agent">Pilih Agen Properti</label>
              <SelectForm name="agent" options={["Veve", "Alfin", "Michelle"]} placeholder="Pilih agen" defaultValue="Veve" />
            </fieldset>

            <div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
              <button type="submit" className={`${styles.ButtonSubmit} blue`}>Kirim</button>
            </div>

            <Dialog.Close asChild>
              <button className={styles.IconButton} aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};