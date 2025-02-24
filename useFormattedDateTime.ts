// import { useIntl } from 'react-intl';

// Хук форматирования даты и времени
export function useFormattedDateTime(date?: number) {
    const { formatDate } = useIntl();

    return date
        ? formatDate(date, {
              day: '2-digit',
              month: '2-digit',
              year: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
          }).replace(',', '')
        : null;
}
